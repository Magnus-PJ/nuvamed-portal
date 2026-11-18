"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  sku: string;
  catNo: string;
  name: string;
  packSize: string;
  quantity: number;
  shipping: string; // "Ambient" or "Cold-Chain"
}

interface CartContextType {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "luminous_in_next_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("LocalStorage unavailable", e);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
      } catch (e) {
        console.warn("Failed to persist cart", e);
      }
    }
  }, [cart, isHydrated]);

  const addItem = (item: Omit<CartItem, "id">) => {
    const id = `${item.sku}-${item.packSize}`;
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, { ...item, id }];
    });
    setDrawerOpen(true);
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        isDrawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
