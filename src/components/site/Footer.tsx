export function Footer() {
  const reload = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = "top";
    setTimeout(() => window.location.reload(), 80);
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#top" onClick={reload} className="flex items-center gap-2.5 mb-5 w-fit">
              <span className="size-9 rounded-full bg-obsidian flex items-center justify-center">
                <span className="size-3 rounded-full bg-gold" />
              </span>
              <span className="text-xl font-bold tracking-tighter">CHIBI<span className="text-gold">·</span>P</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Figuras coleccionables con personalidad. Hechas a mano, refinadas con IA, distribuidas en drops limitados.
            </p>
          </div>

          <FooterCol title="Soporte" items={["FAQ", "Envíos", "Devoluciones", "Contacto"]} />
          <FooterCol title="Marca" items={["Manifiesto", "Drops", "Prensa", "Privacidad"]} />
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
            © 2026 La Colección Chibi-Penguin · Concept by Tu Nombre — Reto de Clase
          </p>
          <a
            href="#top"
            onClick={reload}
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold hover:underline"
          >
            ↺ Nueva expresión aleatoria
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-sm font-medium hover:text-gold transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
