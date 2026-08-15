import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { brandLogo } from "@/lib/frozon-data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Mixes", href: "#mixes" },
  { label: "Why FROZORA", href: "#why" },
  { label: "Recipes", href: "#recipes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/70 bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src={brandLogo} alt="FROZORA logo" width={180} height={65} className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Freshness Locked. Goodness Unlocked. Ready-to-cook frozen vegetable mixes for modern
              kitchens.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Say hello</h3>
            <a
              href="mailto:hello@frozon.in"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" /> hello@frozon.in
            </a>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-all hover:-translate-y-0.5 hover:bg-secondary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          © 2026 FROZORA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
