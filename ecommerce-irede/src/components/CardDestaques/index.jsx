import { useContext } from 'react';
import { ProductContext } from '../../context/produtoContext';
import { CartContext } from '../../context/carrinhoContext'; // Importe o contexto do carrinho

function CardDestaques() {
  const { products } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext); // Use o contexto do carrinho

  const handleAddToCart = (product) => {
    console.log('Adicionando ao carrinho:', product); // Adicione este console.log para verificar os dados do produto
    const updatedCart = {
      ...cart,
      products: [...cart.products, { ...product, quantity: 1 }] // Adicione o produto ao carrinho com quantidade inicial de 1
    };
    setCart(updatedCart); // Atualize o estado do carrinho
  };

  return (
    <>
      {products.map((product) => (
        <div
          className="bg-white w-[144px] pb-3 rounded-md drop-shadow-md"
          key={product.id}
        >
          <img
            className="h-[96px] m-auto"
            src={product.imagem}
            alt={product.nome}
          />
          <h3 className="text-lg pl-3 font-bold text-blue-900">
            {product.nome}
          </h3>
          <p className="text-xs pl-3 text-slate-300 font-medium">
            {product.categoria}
          </p>
          <p className="text-orange-500 pl-3 font-semibold">
            R$ {product.preco}
          </p>
          <button
            className="inline-block ml-3 px-4 py-1 bg-blue-900 text-white text-center text-xs font-medium rounded-md"
            onClick={() => handleAddToCart(product)}
          >
            Comprar
          </button>
        </div>
      ))}
    </>
  );
}

export default CardDestaques;
