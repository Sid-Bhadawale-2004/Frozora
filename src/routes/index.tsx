import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/frozon/navbar";
import { Hero } from "@/components/frozon/hero";
import { WhyFrozon } from "@/components/frozon/why-frozon";
import { HowItWorks } from "@/components/frozon/how-it-works";
import { ProductRange } from "@/components/frozon/product-range";
import { MixFinder } from "@/components/frozon/mix-finder";
import { Comparison } from "@/components/frozon/comparison";
import { Recipes } from "@/components/frozon/recipes";
import { About } from "@/components/frozon/about";
import { FinalCta } from "@/components/frozon/final-cta";
import { SiteFooter } from "@/components/frozon/site-footer";

const title = "FROZORA — Freshness Locked. Goodness Unlocked.";
const description =
  "FROZORA frozen vegetable mixes: Daily Mix, Indo-Chinese Mix, Curry Mix and Soup Mix. Ready-to-cook 500g packs for pulao, stir-fries, curries and soups.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyFrozon />
        <HowItWorks />
        <ProductRange />
        <MixFinder />
        <Comparison />
        <Recipes />
        <About />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
