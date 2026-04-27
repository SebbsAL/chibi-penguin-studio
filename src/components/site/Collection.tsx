import { useState } from "react";
import standardImg from "@/assets/chibi-standard.png";
import cookieImg from "@/assets/chibi-cookie.png";
import travelerImg from "@/assets/chibi-traveler.png";
import angryImg from "@/assets/chibi-angry.png";
import trioImg from "@/assets/chibi-trio.png";
import quartetImg from "@/assets/chibi-quartet.png";
import { Compass, Map, Cookie, Flame, Music } from "lucide-react";

type Card = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  img: string;
  accent: "gold" | "sky" | "obsidian";
  hoverFx: "cookie" | "travel" | "angry" | "color" | "music" | "none";
};

const trioColors = [
  { name: "Onyx", value: "obsidian", swatch: "bg-obsidian" },
  { name: "Sky", value: "sky", swatch: "bg-sky" },
  { name: "Blossom", value: "pink", swatch: "bg-[oklch(0.88_0.08_350)]" },
];

const cards: Card[] = [
  { id: "std", title: "El Estándar Chibi", subtitle: "Pose flippers · Edición Core", price: "$49.99", img: standardImg, accent: "gold", hoverFx: "none" },
  { id: "cookie", title: "El Amante de las Galletas", subtitle: "Snack Pack · Limited", price: "$54.99", img: cookieImg, accent: "gold", hoverFx: "cookie" },
  { id: "traveler", title: "El Viajero Aventurero", subtitle: "Backpack Edition · World Tour", price: "$59.99", img: travelerImg, accent: "sky", hoverFx: "travel" },
  { id: "angry", title: "El Chibi Enojado", subtitle: "Furious Drift · Red Car incl.", price: "$57.99", img: angryImg, accent: "obsidian", hoverFx: "angry" },
  { id: "trio", title: "El Trío de Colores", subtitle: "3-Pack Selectable · Rare", price: "$129.99", img: trioImg, accent: "sky", hoverFx: "color" },
  { id: "music", title: "Edición Beat Drop", subtitle: "Sound Reactive · Tour DJ", price: "$64.99", img: quartetImg, accent: "gold", hoverFx: "music" },
];

export function Collection() {
  return (
    <section id="coleccion" className="relative py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="pill-chip bg-gold text-obsidian mb-4">Drop 01 · Disponible</div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
              La <span className="italic font-light">Colección</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Seis personalidades. Una sola actitud. Cada figura viene con certificado de autenticidad.
            </p>
          </div>
          <a href="#tienda" className="text-sm font-bold tracking-[0.18em] uppercase border-b-2 border-obsidian pb-1 self-start lg:self-end">
            Ver todo el archivo →
          </a>
        </div>

        <div id="tienda" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <ProductCard key={c.id} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ card }: { card: Card }) {
  const [color, setColor] = useState(trioColors[0].value);

  const accentBg =
    card.accent === "gold" ? "bg-gold-soft" : card.accent === "sky" ? "bg-sky-soft" : "bg-secondary";

  return (
    <article
      className={`group relative rounded-[2.25rem] ${accentBg} p-6 border border-border overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-pop`}
    >
      <div className="absolute inset-0 clip-pattern opacity-30 pointer-events-none" />

      <div className="relative aspect-square bg-background rounded-3xl overflow-hidden mb-5 border border-border">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover overlays per fx */}
        {card.hoverFx === "cookie" && (
          <div className="absolute top-4 right-4 size-14 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Cookie className="size-7 text-amber-700 group-hover:animate-jiggle" />
          </div>
        )}
        {card.hoverFx === "travel" && (
          <div className="absolute inset-0 flex items-end justify-center gap-3 p-5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="size-11 rounded-full bg-background flex items-center justify-center shadow-soft -translate-y-2">
              <Compass className="size-5 text-sky" />
            </div>
            <div className="size-11 rounded-full bg-background flex items-center justify-center shadow-soft">
              <Map className="size-5 text-gold" />
            </div>
          </div>
        )}
        {card.hoverFx === "angry" && (
          <div className="absolute -top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="relative">
              <div className="size-16 rounded-full bg-destructive/80 blur-md" />
              <Flame className="absolute inset-0 m-auto size-8 text-background" />
            </div>
          </div>
        )}
        {card.hoverFx === "music" && (
          <div className="absolute top-4 right-4 size-12 rounded-full bg-obsidian flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Music className="size-5 text-gold animate-pulse-soft" />
          </div>
        )}

        {card.hoverFx === "color" && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className={`size-24 rounded-full ${
                trioColors.find((c) => c.value === color)?.swatch
              } shadow-pop border-4 border-background`}
            />
          </div>
        )}
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-xl font-bold tracking-tight">{card.title}</h3>
          <span className="text-lg font-bold tabular-nums shrink-0">{card.price}</span>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-5">
          {card.subtitle}
        </p>

        {card.hoverFx === "color" && (
          <div className="flex items-center gap-2 mb-4">
            {trioColors.map((c) => (
              <button
                key={c.value}
                aria-label={c.name}
                onClick={() => setColor(c.value)}
                className={`size-7 rounded-full ${c.swatch} border-2 transition-all ${
                  color === c.value ? "border-gold scale-110" : "border-background"
                }`}
              />
            ))}
          </div>
        )}

        <button className="w-full h-12 rounded-full bg-obsidian text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-obsidian transition-colors">
          Comprar Ahora
        </button>
      </div>
    </article>
  );
}
