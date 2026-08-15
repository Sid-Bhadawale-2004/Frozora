import { useState } from "react";
import { Clock, ChefHat, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { productById } from "@/lib/frozon-data";
import { recipes, type Recipe } from "@/lib/frozon-recipes";
import { addToCart } from "@/lib/cart-store";
import { Reveal } from "./reveal";

export function Recipes() {
  const [active, setActive] = useState<Recipe | null>(null);
  const product = active ? productById(active.mix) : null;

  return (
    <section id="recipes" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
            Recipe inspiration
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Delicious Made Easy.</h2>
          <p className="mt-4 text-muted-foreground">One FROZORA mix. One delicious meal.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((r, i) => {
            const p = productById(r.mix);
            return (
              <Reveal key={r.slug} delay={i * 90} className="h-full">
                <article
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
                  style={{ borderTop: `4px solid ${p.accent}` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={r.image}
                      alt={`${r.title} made with FROZORA ${p.name}`}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      <Clock className="h-3.5 w-3.5" /> {r.time}
                    </span>
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      <ChefHat className="h-3.5 w-3.5" /> {r.difficulty}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span
                      className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold"
                      style={{
                        background: `color-mix(in oklab, ${p.accent} 14%, white)`,
                        color: p.accent,
                      }}
                    >
                      {p.name}
                    </span>
                    <h3 className="mt-3 text-lg leading-snug font-semibold text-foreground">
                      <span aria-hidden className="mr-1">
                        {r.emoji}
                      </span>
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.highlight}
                    </p>
                    <p className="mt-auto pt-3 text-sm font-bold text-primary">₹{p.price}</p>

                    <Button
                      onClick={() => setActive(r)}
                      variant="outline"
                      className="mt-5 w-full rounded-full border-transparent font-semibold"
                      style={{
                        background: `color-mix(in oklab, ${p.accent} 12%, white)`,
                        color: p.accent,
                      }}
                    >
                      View Recipe <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[1.75rem] p-0 sm:max-w-3xl">
          {active && product && (
            <>
              <img
                src={active.image}
                alt={active.title}
                className="h-52 w-full object-cover sm:h-64"
              />
              <div className="p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <span
                    className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{
                      background: `color-mix(in oklab, ${product.accent} 14%, white)`,
                      color: product.accent,
                    }}
                  >
                    FROZORA {product.name}
                  </span>
                  <DialogTitle className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
                    {active.emoji} {active.title}
                  </DialogTitle>
                  <DialogDescription>{active.highlight}</DialogDescription>
                </DialogHeader>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                    <Clock className="h-3.5 w-3.5" /> {active.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                    <ChefHat className="h-3.5 w-3.5" /> {active.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                    {product.size} · ₹{product.price}
                  </span>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.2fr]">
                  <div>
                    <h4 className="text-sm font-bold tracking-wide text-foreground uppercase">
                      Ingredients
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {active.ingredients.map((ing) => (
                        <li key={ing} className="flex gap-2">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: product.accent }}
                          />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wide text-foreground uppercase">
                      Method
                    </h4>
                    <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
                      {active.method.map((step, idx) => (
                        <li key={step} className="flex gap-3">
                          <span
                            className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                            style={{
                              background: `color-mix(in oklab, ${product.accent} 14%, white)`,
                              color: product.accent,
                            }}
                          >
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center gap-4 rounded-[1.5rem] border border-border/70 bg-muted/50 p-4 sm:flex-row">
                  <img
                    src={product.image}
                    alt={`FROZORA ${product.name} pack`}
                    className="h-24 w-auto object-contain"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-semibold text-foreground">FROZORA {product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {product.size} · ₹{product.price}
                    </p>
                  </div>
                  <Button
                    className="w-full rounded-full px-6 font-semibold sm:w-auto"
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart className="mr-1 h-4 w-4" /> Add to Cart — ₹{product.price}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
