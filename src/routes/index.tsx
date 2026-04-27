import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Collection } from "@/components/site/Collection";
import { AICustomizer } from "@/components/site/AICustomizer";
import { Community } from "@/components/site/Community";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "La Colección Chibi-Penguin · Figuras coleccionables con IA" },
      {
        name: "description",
        content:
          "Explora la colección Chibi-Penguin o diseña tu figura única con IA. Drops limitados, acabado premium, actitud kawaii industrial.",
      },
      { property: "og:title", content: "La Colección Chibi-Penguin" },
      { property: "og:description", content: "Figuras coleccionables personalizables con IA generativa." },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Collection />
          <AICustomizer />
          <Community />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
