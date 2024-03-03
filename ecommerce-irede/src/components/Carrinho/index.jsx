import { useContext, useState } from 'react';
import { ProductContext } from '../../context/produtoContext';

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
          <p className="text-xs font-semibold text-stone-500">
            Qtd: {quantity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Carrinho() {
  const { products, setProducts } = useContext(ProductContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleEmptyCart = () => {
    setProducts([]);
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
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  quantity={product.quantity}
                />
              ))}
              <div className="flex py-6 justify-center gap-3 border-stone-900 border-t-2">
                <p className="font-semibold">Valor total:</p>
                <p className="font-semibold text-blue-900">
                  R${' '}
                  {products
                    .reduce(
                      (total, product) => total + parseFloat(product.price),
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
                  Finalizar Comprar
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
