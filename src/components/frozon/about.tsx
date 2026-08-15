import { Leaf, Snowflake, Truck } from "lucide-react";
import veggies from "@/assets/about-veggies.jpg";
import { productById } from "@/lib/frozon-data";
import { Reveal } from "./reveal";

export function About() {
  const daily = productById("daily");

  return (
    <section id="about" className="bg-gradient-mint py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={veggies}
              alt="Fresh broccoli, carrots, peas, corn and cauliflower on a cream surface"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
            <div className="absolute -right-2 -bottom-8 w-32 rounded-3xl border border-white/70 bg-card p-3 shadow-float sm:-right-6 sm:w-40">
              <img
                src={daily.image}
                alt="FROZORA Daily Mix 500g pack"
                loading="lazy"
                width={405}
                height={650}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
            About FROZORA
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            From Fresh Fields to Your Freezer.
          </h2>
          <p className="mt-5 text-muted-foreground">
            At FROZORA, we believe convenience should never mean compromising on goodness. Our
            vegetable mixes are designed for modern lifestyles, giving you a simple and convenient
            way to enjoy your favourite vegetables whenever you need them.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether you're preparing a quick weekday dinner, a comforting soup, a delicious curry,
            or your favourite fried rice, FROZORA is ready when you are.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Leaf, label: "Carefully sourced" },
              { icon: Snowflake, label: "Freshly frozen" },
              { icon: Truck, label: "Cold-chain delivered" },
            ].map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 rounded-2xl border border-white/70 bg-card px-4 py-3 shadow-soft"
              >
                <f.icon className="h-5 w-5 shrink-0 text-leaf" />
                <span className="min-w-0 text-sm font-medium text-foreground">{f.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
