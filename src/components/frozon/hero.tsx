import { Snowflake, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/frozon-data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-mint pt-28 pb-16 sm:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--leaf) 30%, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full opacity-50 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--brand-gold) 30%, transparent)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-xs font-semibold tracking-wide text-primary uppercase shadow-soft backdrop-blur">
            <Snowflake className="h-4 w-4" />
            Fresh Frozen Goodness
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-primary sm:text-5xl lg:text-6xl">
            Freshness Locked.
            <br />
            <span className="text-leaf">Goodness Unlocked.</span>
          </h1>

          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Your favourite vegetables, perfectly mixed and freshly frozen — ready whenever
            inspiration strikes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-card">
              <a href="#mixes">
                Explore Our Mixes <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/25 bg-card/70 px-7 text-primary backdrop-blur hover:bg-card"
            >
              <a href="#about">Discover FROZORA</a>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { k: "4", v: "Signature mixes" },
              { k: "500g", v: "Family-friendly packs" },
              { k: "0", v: "Chopping required" },
            ].map((s) => (
              <div key={s.v} className="min-w-0">
                <dt className="font-display text-2xl font-bold text-primary">{s.k}</dt>
                <dd className="text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-6 bottom-6 h-40 rounded-[50%] opacity-40 blur-2xl"
            style={{ background: "color-mix(in oklab, var(--leaf) 45%, transparent)" }}
          />
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:gap-4 xl:gap-6">
            {products.map((p, i) => (
              <div
                key={p.id}
                className="float-slow group relative rounded-3xl border border-white/60 bg-card/70 p-3 shadow-float backdrop-blur transition-transform duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${i * 0.6}s`,
                  transform: i % 2 === 1 ? "translateY(1.75rem)" : undefined,
                }}
              >
                <div
                  className="rounded-2xl p-2"
                  style={{ background: p.tint }}
                >
                  <img
                    src={p.image}
                    alt={`FROZORA ${p.name} 500g frozen vegetable pack`}
                    width={405}
                    height={650}
                    className="mx-auto h-auto w-full drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-xs font-semibold text-primary">{p.name}</p>
              </div>
            ))}
          </div>
          <span className="absolute -top-3 left-2 inline-flex items-center gap-1 rounded-full bg-card px-3 py-1 text-xs font-semibold text-leaf shadow-soft">
            <Leaf className="h-3.5 w-3.5" /> 100% Vegetarian
          </span>
        </div>
      </div>
    </section>
  );
}
