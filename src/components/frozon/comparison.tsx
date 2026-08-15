import { Check, X, Snowflake, Clock } from "lucide-react";
import { Reveal } from "./reveal";

const traditional = [
  "Requires washing",
  "Requires chopping",
  "Takes preparation time",
  "Some vegetables may spoil before use",
];

const frozon = [
  "Ready to cook",
  "Convenient for busy days",
  "Easy to store in the freezer",
  "Available whenever needed",
  "Helps reduce unnecessary food waste",
];

export function Comparison() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">The easy way</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Why Choose Frozen Vegetable Mixes
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[2rem] border border-border/70 bg-muted/50 p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                <Clock className="h-4 w-4" /> Traditional Preparation
              </span>
              <ul className="mt-6 space-y-4">
                {traditional.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-background text-muted-foreground">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-fresh p-7 text-primary-foreground shadow-float">
              <div
                aria-hidden
                className="absolute -top-16 -right-10 h-52 w-52 rounded-full bg-white/10 blur-2xl"
              />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">
                <Snowflake className="h-4 w-4" /> With FROZORA
              </span>
              <ul className="relative mt-6 space-y-4">
                {frozon.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/20">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="relative mt-7 text-sm/relaxed opacity-90">
                Open the pack, cook, and enjoy — FROZORA keeps your kitchen ready for every meal.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
