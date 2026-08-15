import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/frozon-data";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-fresh px-6 py-14 text-primary-foreground shadow-float sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -right-10 -bottom-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">
                <Sparkles className="h-4 w-4" /> Freshness Locked. Goodness Unlocked.
              </span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Ready to Unlock Freshness?
              </h2>
              <p className="mt-4 text-base opacity-90">
                Discover a smarter and more convenient way to enjoy your favourite vegetable mixes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-7 font-semibold shadow-card"
                >
                  <a href="#mixes">
                    Explore Our Mixes <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/50 bg-transparent px-7 text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
                >
                  <a href="#finder">Find Your Perfect Mix</a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 items-end gap-2 sm:gap-4">
              {products.map((p) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={`FROZORA ${p.name} pack`}
                  loading="lazy"
                  width={405}
                  height={650}
                  className="h-28 w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:-translate-y-2 sm:h-40 lg:h-48"
                />
              ))}
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
