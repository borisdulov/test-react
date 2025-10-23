import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types/product";
import { CartItem } from "../types/cartItem";

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => setItems([]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem,
      removeItem,
      clearCart,
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
