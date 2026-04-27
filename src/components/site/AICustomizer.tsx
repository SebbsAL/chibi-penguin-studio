import { useState } from "react";
import standardImg from "@/assets/chibi-standard.png";
import happyImg from "@/assets/chibi-happy.png";
import angryImg from "@/assets/chibi-angry.png";
import travelerImg from "@/assets/chibi-traveler.png";
import cookieImg from "@/assets/chibi-cookie.png";
import deskImg from "@/assets/chibi-desk.png";
import quartetImg from "@/assets/chibi-quartet.png";

// Suits
import suitOnyx from "@/assets/options/suit-onyx.png";
import suitAstronauta from "@/assets/options/suit-astronauta.png";
import suitCyberpunk from "@/assets/options/suit-cyberpunk.png";
import suitChef from "@/assets/options/suit-chef.png";
import suitMedieval from "@/assets/options/suit-medieval.png";
import suitCielo from "@/assets/options/suit-cielo.png";

// Accessories
import accGalleta from "@/assets/options/acc-galleta.png";
import accMochila from "@/assets/options/acc-mochila.png";
import accAuriculares from "@/assets/options/acc-auriculares.png";
import accDragon from "@/assets/options/acc-dragon.png";
import accBufanda from "@/assets/options/acc-bufanda.png";
import accClip from "@/assets/options/acc-clip.png";

// Moods
import moodFeliz from "@/assets/options/mood-feliz.png";
import moodEnojado from "@/assets/options/mood-enojado.png";
import moodSomnoliento from "@/assets/options/mood-somnoliento.png";
import moodConfundido from "@/assets/options/mood-confundido.png";
import moodFurioso from "@/assets/options/mood-furioso.png";

import { Sparkles, Loader2 } from "lucide-react";

type Option = { label: string; img: string };

const suits: Option[] = [
  { label: "Onyx Clásico", img: suitOnyx },
  { label: "Astronauta", img: suitAstronauta },
  { label: "Cyberpunk", img: suitCyberpunk },
  { label: "Chef", img: suitChef },
  { label: "Medieval", img: suitMedieval },
  { label: "Cielo Azul", img: suitCielo },
];

const accs: Option[] = [
  { label: "Galleta", img: accGalleta },
  { label: "Mochila", img: accMochila },
  { label: "Auriculares", img: accAuriculares },
  { label: "Mini Dragón", img: accDragon },
  { label: "Bufanda", img: accBufanda },
  { label: "Clip Dorado", img: accClip },
];

const moods: Option[] = [
  { label: "Feliz", img: moodFeliz },
  { label: "Enojado", img: moodEnojado },
  { label: "Somnoliento", img: moodSomnoliento },
  { label: "Confundido", img: moodConfundido },
  { label: "Furioso", img: moodFurioso },
];

const pool = [standardImg, happyImg, angryImg, travelerImg, cookieImg, deskImg, quartetImg];

export function AICustomizer() {
  const [suit, setSuit] = useState<Option>(suits[0]);
  const [acc, setAcc] = useState<Option>(accs[0]);
  const [mood, setMood] = useState<Option>(moods[0]);
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
            Selecciona cada parámetro y observa la opción exacta antes de sintetizar tu figura.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Viewport — Resumen visual de la selección actual */}
          <div className="lg:col-span-7 relative rounded-[2.5rem] bg-white/5 border border-white/10 p-8 lg:p-10 overflow-hidden">
            <div className="absolute top-6 left-6 pill-chip bg-gold text-obsidian z-10">
              Tu Selección Actual
            </div>
            <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 z-10">
              <span className="size-1.5 rounded-full bg-sky animate-pulse-soft" /> Synth-V2
            </div>

            {/* Trio de previews por categoría */}
            <div className="mt-12 grid grid-cols-3 gap-3 lg:gap-5">
              <PreviewCard caption="Traje" option={suit} accent="gold" />
              <PreviewCard caption="Accesorio" option={acc} accent="sky" />
              <PreviewCard caption="Expresión" option={mood} accent="gold" />
            </div>

            {/* Concepto generado por IA */}
            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                  Concepto generado · IA
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold tabular-nums">
                  {Math.round(progress)}%
                </div>
              </div>
              <div className="aspect-[16/9] rounded-[1.2rem] bg-white/5 overflow-hidden flex items-center justify-center border border-white/10">
                {generating ? (
                  <div className="flex flex-col items-center gap-4 text-white/70">
                    <Loader2 className="size-10 animate-spin text-gold" />
                    <p className="text-xs font-bold tracking-[0.2em] uppercase">Sintetizando…</p>
                  </div>
                ) : (
                  <img key={result} src={result} alt="Chibi generado" className="w-full h-full object-cover" />
                )}
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
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

function PreviewCard({
  caption,
  option,
  accent,
}: {
  caption: string;
  option: Option;
  accent: "gold" | "sky";
}) {
  const ring = accent === "gold" ? "ring-gold/60" : "ring-sky/60";
  const dot = accent === "gold" ? "bg-gold" : "bg-sky";
  return (
    <div className={`relative rounded-[1.4rem] border border-white/10 bg-black/40 overflow-hidden ring-1 ${ring}`}>
      <div className="aspect-[3/4] overflow-hidden bg-white/[0.02]">
        <img
          key={option.img}
          src={option.img}
          alt={`${caption}: ${option.label}`}
          className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-300"
        />
      </div>
      <div className="px-3 py-2.5 border-t border-white/10 flex items-center gap-2">
        <span className={`size-1.5 rounded-full ${dot}`} />
        <div className="min-w-0">
          <div className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/40 leading-none">
            {caption}
          </div>
          <div className="text-xs font-bold text-white truncate mt-1">{option.label}</div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: Option;
  options: Option[];
  onChange: (v: Option) => void;
}) {
  return (
    <div className="mb-6">
      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.label}
            onClick={() => onChange(o)}
            className={`px-4 h-10 rounded-full text-xs font-bold tracking-wide border transition-all ${
              value.label === o.label
                ? "bg-gold text-obsidian border-gold"
                : "bg-transparent text-white/70 border-white/15 hover:border-white/40"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
