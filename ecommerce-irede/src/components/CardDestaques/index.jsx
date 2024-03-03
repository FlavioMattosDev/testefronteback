import { useContext } from 'react';
import { ProductContext } from '../../context/produtoContext';

export default function CardDestaques() {
  const { products } = useContext(ProductContext);

  return (
    <>
      {products.map(product => (
        <div className="bg-white w-[144px] pb-3 rounded-md drop-shadow-md" key={product.id}>
          <img className="h-[96px] m-auto" src={product.imagem} alt={product.nome} /> {/* Ajuste aqui */}
          <h3 className="text-lg pl-3 font-bold text-blue-900">{product.nome}</h3> {/* Ajuste aqui */}
          <p className="text-xs pl-3 text-slate-300 font-medium">{product.categoria}</p> {/* Ajuste aqui */}
          <p className="text-orange-500 pl-3 font-semibold">R$ {product.preco}</p> {/* Ajuste aqui */}
          <a
            className="inline-block ml-3 px-4 py-1 bg-blue-900 text-white text-center text-xs font-medium rounded-md"
            href="#"
          >
            Comprar
          </a>
        </div>
      ))}
    </>
  );
}
