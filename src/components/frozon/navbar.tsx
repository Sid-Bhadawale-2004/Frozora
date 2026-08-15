import { useEffect, useState } from "react";
import { Menu, X, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartButton } from "./cart-button";
import { brandLogo } from "@/lib/frozon-data";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Mixes", href: "#mixes" },
  { label: "Why FROZORA", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Recipes", href: "#recipes" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 shadow-soft backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2" aria-label="FROZORA home">
          <img
            src={brandLogo}
            alt="FROZORA logo"
            width={160}
            height={58}
            className="h-9 w-auto shrink-0 sm:h-11"
          />
        </a>

        <ul className="hidden items-center justify-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <CartButton />
          <Button asChild className="hidden rounded-full px-5 shadow-soft lg:inline-flex">
            <a href="#mixes">Explore Our Mixes</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
                <Snowflake className="h-4 w-4 text-primary/50" />
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full rounded-full" onClick={() => setOpen(false)}>
              <a href="#mixes">Explore Our Mixes</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
