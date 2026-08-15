import { Snowflake, Salad, Zap, Sprout } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  {
    icon: Snowflake,
    title: "Freshness Locked",
    text: "Carefully frozen to help preserve freshness.",
    color: "var(--brand-blue)",
  },
  {
    icon: Salad,
    title: "Goodness Preserved",
    text: "A convenient way to enjoy the natural goodness of vegetables.",
    color: "var(--leaf)",
  },
  {
    icon: Zap,
    title: "Ready to Cook",
    text: "No washing, peeling, or chopping. Open, cook, and enjoy.",
    color: "var(--brand-orange)",
  },
  {
    icon: Sprout,
    title: "Less Waste",
    text: "Use what you need and keep the rest ready for another meal.",
    color: "var(--brand-gold)",
  },
];

export function WhyFrozon() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">Why FROZORA</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Fresh from Nature. Ready When You Are.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in oklab, ${item.color} 14%, white)`,
                    color: item.color,
                  }}
                >
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
