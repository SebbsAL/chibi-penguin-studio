import heroImg from "@/assets/chibi-hero.png";
import cookieImg from "@/assets/chibi-cookie.png";
import deskImg from "@/assets/chibi-desk.png";
import travelerImg from "@/assets/chibi-traveler.png";
import quartetImg from "@/assets/chibi-quartet.png";
import trioImg from "@/assets/chibi-trio.png";
import { Heart, MessageCircle } from "lucide-react";

const feed = [
  { img: heroImg, user: "@kenji.builds", likes: "12.4k" },
  { img: deskImg, user: "@desk.life", likes: "8.1k" },
  { img: travelerImg, user: "@nomad.peng", likes: "21.7k" },
  { img: cookieImg, user: "@sweet.shelf", likes: "6.9k" },
  { img: quartetImg, user: "@penguin.gang", likes: "33.2k" },
  { img: trioImg, user: "@trio.collector", likes: "15.5k" },
];

const testimonials = [
  {
    name: "Aiko M.",
    role: "Coleccionista · Tokio",
    quote: "El nivel de detalle es brutal. Los clips metálicos son el guiño perfecto. Mi escritorio cambió.",
  },
  {
    name: "Marco V.",
    role: "Diseñador · Madrid",
    quote: "El customizer IA me dio una versión cyberpunk que no sabía que necesitaba. Compra inmediata.",
  },
  {
    name: "Lía P.",
    role: "Streamer · CDMX",
    quote: "La cara cambia con el mood y la pieza tiene presencia. Mis viewers preguntan dónde la conseguí.",
  },
];

export function Community() {
  return (
    <section id="comunidad" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="pill-chip bg-sky text-obsidian mb-4">Pingüino-Familia</div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
              Únete a la <span className="italic font-light">comunidad.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Coleccionistas reales mostrando sus Chibi en escritorios, viajes y rincones impensables.
            </p>
          </div>
          <a
            href="#"
            className="px-6 h-12 inline-flex items-center rounded-full bg-obsidian text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-obsidian transition-colors"
          >
            Comparte tu foto · #ChibiPenguin
          </a>
        </div>

        {/* Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 mb-20">
          {feed.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary border border-border"
            >
              <img src={p.img} alt={p.user} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/0 to-obsidian/0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-primary-foreground">
                <p className="text-xs font-bold">{p.user}</p>
                <div className="flex items-center gap-3 text-[10px] mt-1 text-white/70">
                  <span className="flex items-center gap-1"><Heart className="size-3" /> {p.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="size-3" /> 312</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-7xl font-bold text-gold/20 leading-none">"</div>
              <blockquote className="text-base leading-relaxed mb-6">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="size-11 rounded-full bg-obsidian flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
