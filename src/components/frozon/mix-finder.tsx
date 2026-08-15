import { useState } from "react";
import { CookingPot, Soup, Utensils, Wheat, Check } from "lucide-react";
import { productById, type ProductId } from "@/lib/frozon-data";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const options: {
  id: ProductId;
  label: string;
  icon: typeof Soup;
}[] = [
  { id: "daily", label: "Indian Everyday Meals", icon: Wheat },
  { id: "indo", label: "Chinese & Stir-Fry", icon: Utensils },
  { id: "curry", label: "Curries & Indian Meals", icon: CookingPot },
  { id: "soup", label: "Quick & Comforting Meals", icon: Soup },
];

export function MixFinder() {
  const [selected, setSelected] = useState<ProductId>("daily");
  const product = productById(selected);

  return (
    <section id="finder" className="bg-gradient-mint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
            Find your perfect mix
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            What Are You Cooking Today?
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,26rem)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {options.map((o) => {
              const active = o.id === selected;
              const p = productById(o.id);
              return (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSelected(o.id)}
                  aria-pressed={active}
                  className={cn(
                    "group flex items-center gap-4 rounded-3xl border bg-card p-5 text-left transition-all duration-300",
                    active
                      ? "-translate-y-1 border-transparent shadow-card"
                      : "border-border/70 shadow-soft hover:-translate-y-1 hover:shadow-card",
                  )}
                  style={active ? { outline: `2px solid ${p.accent}` } : undefined}
                >
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `color-mix(in oklab, ${p.accent} 14%, white)`,
                      color: p.accent,
                    }}
                  >
                    <o.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-foreground">{o.label}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      Try the {p.name}
                    </span>
                  </span>
                  {active && (
                    <Check className="ml-auto h-5 w-5 shrink-0" style={{ color: p.accent }} />
                  )}
                </button>
              );
            })}
          </div>

          <div
            key={product.id}
            className="animate-in fade-in zoom-in-95 rounded-[2rem] border border-white/70 bg-card p-6 shadow-float duration-500"
            style={{ borderTop: `5px solid ${product.accent}` }}
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              We recommend
            </p>
            <h3 className="mt-1 text-2xl font-bold" style={{ color: product.accent }}>
              {product.name}
            </h3>
            <div className="mt-4 rounded-3xl p-4" style={{ background: product.tint }}>
              <img
                src={product.image}
                alt={`FROZORA ${product.name} 500g frozen vegetable pack`}
                loading="lazy"
                width={405}
                height={650}
                className="mx-auto h-64 w-auto object-contain drop-shadow-xl"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Perfect for {product.perfectFor} · {product.size} pack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
