import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/produtos'); // Corrigido para a porta correta
      if (!response.ok) {
        throw new Error('Não foi possível obter os produtos');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, error }}>
      {children}
    </ProductContext.Provider>
  );
};
