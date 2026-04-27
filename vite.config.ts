// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Detect Vercel build environment. On Vercel, swap the Cloudflare worker output
// for Nitro's Vercel preset so the app deploys as a Vercel Function with SSR.
// Locally and on Lovable, the default Cloudflare target is preserved.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  vite: isVercel
    ? {
        plugins: [
          nitro({
            preset: "vercel",
          }),
        ],
      }
    : undefined,
});
