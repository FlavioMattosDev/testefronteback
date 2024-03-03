import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext([]);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:5000/produtos');
        if (!response.ok) {
          throw new Error('Falha ao obter os produtos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
