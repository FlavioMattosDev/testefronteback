import { createContext, useState } from 'react';
import product from '/src/assets/img-shoes-card.png';

export const ProductContext = createContext([]);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Nique Air Surf',
      image: product,
      category: 'Tênis',
      price: '200,00',
      quantity: 2,
      status: 'Finalizado',
    },
    {
      id: 2,
      name: 'Blusa do Goku',
      image: product,
      category: 'Camiseta',
      price: '999,00',
      quantity: 15,
      status: 'Esperando Pagamento',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
