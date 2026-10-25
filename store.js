import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

const STORAGE_KEY = "mini-shop-cart";

// Bonus Level 2: load the cart from localStorage on startup
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return undefined;
    const items = JSON.parse(saved);
    return Array.isArray(items) ? { cart: { items } } : undefined;
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadCart(),
});

// Bonus Level 2: save the cart every time it changes
store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().cart.items));
  } catch {
    /* storage unavailable - ignore */
  }
});
