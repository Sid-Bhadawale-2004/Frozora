import packDaily from "@/assets/pack-daily.png";
import packIndo from "@/assets/pack-indo.png";
import packCurry from "@/assets/pack-curry.png";
import packSoup from "@/assets/pack-soup.png";
import logo from "@/assets/frozon-logo.png";

export const brandLogo = logo;

export type ProductId = "daily" | "indo" | "curry" | "soup";

export type Product = {
  id: ProductId;
  name: string;
  theme: string;
  image: string;
  perfectFor: string;
  size: string;
  price: number;
  accent: string; // css color
  tint: string; // soft background
};

export const products: Product[] = [
  {
    id: "daily",
    name: "Daily Mix",
    theme: "Fresh Green",
    image: packDaily,
    perfectFor: "Pulao, Khichdi, Parathas & More",
    size: "500g",
    price: 99,
    accent: "var(--leaf)",
    tint: "color-mix(in oklab, var(--leaf) 12%, white)",
  },
  {
    id: "indo",
    name: "Indo-Chinese Mix",
    theme: "Orange",
    image: packIndo,
    perfectFor: "Noodles, Fried Rice, Stir-fry & More",
    size: "500g",
    price: 119,
    accent: "var(--brand-orange)",
    tint: "color-mix(in oklab, var(--brand-orange) 12%, white)",
  },
  {
    id: "curry",
    name: "Curry Mix",
    theme: "Golden Yellow",
    image: packCurry,
    perfectFor: "Curry, Aloo Gobi, Mix Veg & More",
    size: "500g",
    price: 109,
    accent: "var(--brand-gold)",
    tint: "color-mix(in oklab, var(--brand-gold) 16%, white)",
  },
  {
    id: "soup",
    name: "Soup Mix",
    theme: "Deep Blue",
    image: packSoup,
    perfectFor: "Soup, Stew & Instant Meals",
    size: "500g",
    price: 99,
    accent: "var(--brand-blue)",
    tint: "color-mix(in oklab, var(--brand-blue) 10%, white)",
  },
];

export const productById = (id: ProductId) => products.find((p) => p.id === id)!;
