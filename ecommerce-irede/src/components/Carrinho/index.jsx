import { useContext, useState } from 'react';
import { CartContext } from '../../context/carrinhoContext'; // Importar o contexto do carrinho

function CartItem({ name, category, price, image, quantity }) {
  return (
    <div className="py-2">
      <div className="flex justify-between items-center">
        <img className="w-24 rounded-md" src={image} alt={name} />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-[0.7rem] text-stone-500 font-semibold">
            {category}
          </p>
          <p className="text-xs font-semibold">R$ {price}</p>
          <p className="text-xs font-semibold">Qtd: {quantity}</p>{' '}
          {/* Adicionando a quantidade */}
        </div>
      </div>
    </div>
  );
}

// No componente Carrinho
export default function Carrinho() {
  const { cart, setCart, addToCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleEmptyCart = () => {
    setCart({ products: [] });
  };

  const handleCheckout = () => {
    window.location.href = '/meuspedidos';
    closeCart();
  };

  return (
    <>
      <img
        src="./src/assets/icon-cart.svg"
        alt="Ícone de carrinho"
        onClick={openCart}
        className="max-h-8 cursor-pointer"
      />
      {isCartOpen && (
        <section className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
          <div className="bg-slate-100 w-72 p-4 rounded-md">
            <div className="flex justify-between py-2 border-stone-900 border-b-2">
              <p className="text-black font-semibold">Meu Carrinho</p>
              <button
                className="px-1 text-stone-900 border border-stone-900 rounded hover:text-white hover:bg-orange-500"
                onClick={closeCart}
              >
                X
              </button>
            </div>
            <div className="divide-y">
              {cart.products.length > 0 ? (
                cart.products.map((product) => (
                  <CartItem
                    key={product.id}
                    name={product.nome}
                    category={product.categoria}
                    price={parseFloat(product.preco)}
                    image={product.imagem}
                    quantity={product.quantity} // Passando a quantidade para o CartItem
                  />
                ))
              ) : (
                <p className="p-4">
                  Você não possui itens adicionados ao carrinho
                </p>
              )}
              <div className="flex py-6 justify-center gap-3 border-stone-900 border-t-2">
                <p className="font-semibold">Valor total:</p>
                <p className="font-semibold text-blue-900">
                  R${' '}
                  {cart.products
                    .reduce(
                      (total, product) =>
                        total + parseFloat(product.preco) * product.quantity, // Multiplicando pelo quantidade
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex justify-evenly items-center py-2 gap-3">
                <button
                  className="text-stone-500 text-xs py-2 hover:text-orange-600"
                  onClick={handleEmptyCart}
                >
                  Esvaziar
                </button>
                <button
                  className="bg-blue-900 w-32 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={handleCheckout}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
