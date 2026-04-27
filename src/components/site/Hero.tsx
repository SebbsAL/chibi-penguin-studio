import { useState } from "react";
import heroImg from "@/assets/chibi-hero.png";
import happyImg from "@/assets/chibi-happy.png";
import angryImg from "@/assets/chibi-angry.png";
import standardImg from "@/assets/chibi-standard.png";

const faces = [heroImg, happyImg, angryImg, standardImg];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const swap = () => setIdx((i) => (i + 1 + Math.floor(Math.random() * (faces.length - 1))) % faces.length);

  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 clip-pattern opacity-50 -z-10" />
      <div className="absolute top-1/3 -right-32 size-[28rem] rounded-full bg-gold/15 blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 size-[24rem] rounded-full bg-sky/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="pill-chip bg-obsidian text-primary-foreground mb-8">
            <span className="size-1.5 rounded-full bg-sky animate-pulse-soft" />
            Engineered by Chibi-Penguin
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.88] text-balance">
            La Personalidad que{" "}
            <span className="text-gold underline decoration-[6px] underline-offset-[10px] decoration-gold/80">
              Coleccionas
            </span>
            .
            <br />
            El Diseño que <span className="italic font-light">Creas</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Explora la colección estándar o usa nuestra IA para diseñar tu Chibi-Penguin único.
            Hardware emocional, fabricado con la actitud de un drop callejero.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#coleccion"
              className="px-8 py-5 bg-obsidian text-primary-foreground rounded-full font-bold text-sm tracking-widest uppercase shadow-pop hover:scale-[1.02] active:scale-95 transition-transform"
            >
              Explora la Colección
            </a>
            <a
              href="#ia"
              className="px-8 py-5 bg-background border-2 border-obsidian rounded-full font-bold text-sm tracking-widest uppercase hover:bg-obsidian hover:text-primary-foreground transition-colors"
            >
              Diseñar con IA
            </a>
          </div>

          <div className="mt-14 flex items-center gap-10">
            <div>
              <div className="text-3xl font-bold tabular-nums">1,402</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Variantes</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold tabular-nums">0.04<span className="text-gold">s</span></div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Latencia IA</div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-3xl font-bold tabular-nums">24k</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Coleccionistas</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div
            onMouseEnter={swap}
            onClick={swap}
            className="aspect-[4/5] bg-secondary rounded-[3rem] overflow-hidden relative border-[10px] border-background shadow-pop cursor-pointer group"
          >
            <img
              key={idx}
              src={faces[idx]}
              alt="Figura Chibi-Penguin con expresiones que cambian al pasar el cursor"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 chrome-surface rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Expresión activa
                </p>
                <h3 className="text-lg font-bold">Mood #{idx + 1} — Hover me</h3>
              </div>
              <div className="size-10 rounded-full bg-gold flex items-center justify-center font-bold text-obsidian text-xs">
                AI
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -left-8 size-36 bg-sky rounded-full flex items-center justify-center p-6 text-center text-obsidian font-bold text-xs leading-tight rotate-[-12deg] shadow-glow-sky border-4 border-background">
            DISEÑO IMPULSADO POR IA
          </div>
          <div className="absolute -bottom-6 -right-6 chrome-surface rounded-2xl px-5 py-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pieza N°</p>
            <p className="text-2xl font-bold tabular-nums">047 / 1500</p>
          </div>
        </div>
      </div>
    </section>
  );
}
