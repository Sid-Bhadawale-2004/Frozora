import { useSyncExternalStore } from "react";
import type { ProductId } from "./frozon-data";

export type CartItem = { id: ProductId; qty: number };

let items: CartItem[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function addToCart(id: ProductId, qty = 1) {
  const existing = items.find((i) => i.id === id);
  items = existing
    ? items.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
    : [...items, { id, qty }];
  emit();
}

export function removeFromCart(id: ProductId) {
  items = items.filter((i) => i.id !== id);
  emit();
}

export function setQty(id: ProductId, qty: number) {
  if (qty <= 0) return removeFromCart(id);
  items = items.map((i) => (i.id === id ? { ...i, qty } : i));
  emit();
}

export function clearCart() {
  items = [];
  emit();
}

const emptySnapshot: CartItem[] = [];

export function useCart() {
  return useSyncExternalStore(
    subscribe,
    () => items,
    () => emptySnapshot,
  );
}
