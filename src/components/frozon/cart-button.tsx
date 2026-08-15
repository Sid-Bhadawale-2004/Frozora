import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { productById } from "@/lib/frozon-data";
import { removeFromCart, setQty, useCart } from "@/lib/cart-store";

export function CartButton() {
  const items = useCart();
  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.qty * productById(i.id).price, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
          className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-colors hover:bg-secondary"
        >
          <ShoppingCart className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
              {count}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>FROZORA mixes ready to cook.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-3 overflow-y-auto px-4">
          {items.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Your cart is empty. Add a mix from any recipe.
            </p>
          )}
          {items.map((item) => {
            const p = productById(item.id);
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-3"
              >
                <img src={p.image} alt="" className="h-16 w-auto object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.size} · ₹{p.price}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7 rounded-full"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(item.id, item.qty - 1)}
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </Button>
                    <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7 rounded-full"
                      aria-label="Increase quantity"
                      onClick={() => setQty(item.id, item.qty + 1)}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="ml-auto h-7 w-7 rounded-full text-muted-foreground"
                      aria-label={`Remove ${p.name}`}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border/70 p-4">
          <div className="flex items-center justify-between text-base font-bold text-foreground">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <Button className="mt-4 w-full rounded-full" disabled={items.length === 0}>
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
