import { useState } from "react";
import standardImg from "@/assets/chibi-standard.png";
import happyImg from "@/assets/chibi-happy.png";
import angryImg from "@/assets/chibi-angry.png";
import travelerImg from "@/assets/chibi-traveler.png";
import cookieImg from "@/assets/chibi-cookie.png";
import deskImg from "@/assets/chibi-desk.png";
import quartetImg from "@/assets/chibi-quartet.png";
import optionsCatalog from "@/assets/chibi-customizer-options.png";
import { Sparkles, Loader2 } from "lucide-react";

const suits = ["Onyx Clásico", "Astronauta", "Cyberpunk", "Chef", "Medieval", "Cielo Azul"];
const accs = ["Galleta", "Mochila", "Auriculares", "Mini Dragón", "Bufanda", "Clip Dorado"];
const moods = ["Feliz", "Enojado", "Somnoliento", "Confundido", "Furioso"];

const pool = [standardImg, happyImg, angryImg, travelerImg, cookieImg, deskImg, quartetImg];

export function AICustomizer() {
  const [suit, setSuit] = useState(suits[0]);
  const [acc, setAcc] = useState(accs[0]);
  const [mood, setMood] = useState(moods[0]);
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(standardImg);
  const [progress, setProgress] = useState(0);

  const generate = () => {
    setGenerating(true);
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / 1800) * 100);
      setProgress(p);
      if (p >= 100) clearInterval(tick);
    }, 60);
    setTimeout(() => {
      setResult(pool[Math.floor(Math.random() * pool.length)]);
      setGenerating(false);
    }, 1850);
  };

  return (
    <section id="ia" className="relative py-28 lg:py-40 bg-obsidian text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 clip-pattern opacity-20" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-sky/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="pill-chip bg-sky/15 text-sky mb-5">
            <Sparkles className="size-3" /> Lab IA · Beta abierta
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
            Diseña tu <span className="text-gold italic font-light">Chibi único.</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Configura los parámetros y deja que nuestra red neuronal sintetice tu figura ideal.
          </p>
        </div>

        {/* Catálogo visual de opciones disponibles */}
        <div className="mb-12 lg:mb-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 lg:p-5 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 mb-3">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
              <span className="size-1.5 rounded-full bg-gold" /> Catálogo · Personalizaciones disponibles
            </div>
            <span className="hidden sm:inline text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              Trajes · Accesorios · Expresiones
            </span>
          </div>
          <img
            src={optionsCatalog}
            alt="Catálogo visual con todas las opciones de personalización: colores de traje, accesorios distintivos y expresiones disponibles para tu Chibi-Penguin"
            className="w-full h-auto rounded-[1.4rem] block"
            loading="lazy"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Viewport */}
          <div className="lg:col-span-7 relative rounded-[2.5rem] bg-white/5 border border-white/10 p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-6 left-6 pill-chip bg-gold text-obsidian z-10">
              Concepto Generado por IA
            </div>
            <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 z-10">
              <span className="size-1.5 rounded-full bg-sky animate-pulse-soft" /> Synth-V2
            </div>

            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-[2rem] border-2 border-dashed border-white/15 animate-spin-slow" />
              <div className="absolute inset-6 rounded-[1.6rem] border border-white/10" />
              <div className="absolute inset-10 rounded-[1.2rem] bg-white/5 overflow-hidden flex items-center justify-center">
                {generating ? (
                  <div className="flex flex-col items-center gap-4 text-white/70">
                    <Loader2 className="size-10 animate-spin text-gold" />
                    <p className="text-xs font-bold tracking-[0.2em] uppercase">Sintetizando…</p>
                  </div>
                ) : (
                  <img key={result} src={result} alt="Chibi generado" className="w-full h-full object-cover" />
                )}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                <span>Síntesis Neuronal</span>
                <span className="text-gold tabular-nums">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky to-gold transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="lg:col-span-5 rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 lg:p-10 flex flex-col">
            <Field label="Color del Traje" value={suit} options={suits} onChange={setSuit} />
            <Field label="Accesorio Distintivo" value={acc} options={accs} onChange={setAcc} />
            <Field label="Expresión" value={mood} options={moods} onChange={setMood} />

            <div className="mt-auto pt-8">
              <button
                onClick={generate}
                disabled={generating}
                className="w-full h-16 rounded-full bg-gold text-obsidian font-bold text-sm tracking-[0.2em] uppercase shadow-glow-gold hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-60 disabled:scale-100 flex items-center justify-center gap-2"
              >
                {generating ? <Loader2 className="size-5 animate-spin" /> : <Sparkles className="size-5" />}
                Generar Chibi Único
              </button>
              <p className="mt-4 text-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                Powered by Synth-V2 · Edición Lovable AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-6">
      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-4 h-10 rounded-full text-xs font-bold tracking-wide border transition-all ${
              value === o
                ? "bg-gold text-obsidian border-gold"
                : "bg-transparent text-white/70 border-white/15 hover:border-white/40"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
