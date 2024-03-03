import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ products: [] });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProductIndex = cart.products.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = { ...cart };
      updatedCart.products[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const updatedCart = {
        ...cart,
        products: [...cart.products, { ...product, quantity: 1 }],
      };
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
