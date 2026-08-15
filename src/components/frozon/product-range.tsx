import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/frozon-data";
import { Reveal } from "./reveal";

export function ProductRange() {
  return (
    <section id="mixes" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
            Our product range
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            One Freezer. Endless Possibilities.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From everyday Indian meals to quick stir-fries, comforting curries and delicious soups —
            FROZORA has a mix for every meal.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="h-full">
              <article
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
                style={{ borderTop: `4px solid ${p.accent}` }}
              >
                <div className="p-5 pb-0" style={{ background: p.tint }}>
                  <img
                    src={p.image}
                    alt={`FROZORA ${p.name} 500g frozen vegetable pack`}
                    loading="lazy"
                    width={405}
                    height={650}
                    className="mx-auto h-56 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 sm:h-64"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="min-w-0 truncate text-lg font-bold text-foreground">{p.name}</h3>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                      style={{
                        background: `color-mix(in oklab, ${p.accent} 14%, white)`,
                        color: p.accent,
                      }}
                    >
                      {p.size}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {p.theme}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Perfect for {p.perfectFor}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 w-full rounded-full border-transparent font-semibold transition-colors"
                    style={{
                      background: `color-mix(in oklab, ${p.accent} 12%, white)`,
                      color: p.accent,
                    }}
                  >
                    <a href="#finder">
                      Explore {p.name} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
