import { Carrot, Snowflake, CookingPot } from "lucide-react";
import { Reveal } from "./reveal";

const steps = [
  {
    no: "01",
    label: "Select",
    icon: Carrot,
    text: "Fresh vegetables are carefully selected.",
    color: "var(--leaf)",
  },
  {
    no: "02",
    label: "Freeze",
    icon: Snowflake,
    text: "They are frozen to help lock in freshness and goodness.",
    color: "var(--brand-blue)",
  },
  {
    no: "03",
    label: "Enjoy",
    icon: CookingPot,
    text: "Open the pack, cook your favourite meal, and enjoy.",
    color: "var(--brand-orange)",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-gradient-mint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            From Fresh to Frozen, Made Simple.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-10 right-[16%] left-[16%] hidden h-px lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, color-mix(in oklab, var(--leaf) 55%, transparent) 0 10px, transparent 10px 20px)",
            }}
          />
          <div
            aria-hidden
            className="absolute top-6 bottom-6 left-[2.5rem] w-px lg:hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, color-mix(in oklab, var(--leaf) 55%, transparent) 0 10px, transparent 10px 20px)",
            }}
          />

          <ol className="relative grid gap-8 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.no}>
                <Reveal delay={i * 120}>
                  <div className="flex gap-5 lg:flex-col lg:items-center lg:text-center">
                    <span
                      className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-card shadow-card"
                      style={{ color: s.color }}
                    >
                      <s.icon className="h-8 w-8" />
                    </span>
                    <div className="min-w-0">
                      <p
                        className="font-display text-sm font-bold tracking-[0.2em]"
                        style={{ color: s.color }}
                      >
                        {s.no} — {s.label.toUpperCase()}
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground lg:mx-auto">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
