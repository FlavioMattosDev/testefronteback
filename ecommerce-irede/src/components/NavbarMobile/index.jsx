import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarMobile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = () => {
    closeModal();
  };

  return (
    <nav className="h-10 bg-blue-900 font-semibold text-zinc-50 flex flex-row items-center justify-center gap-10">
      <div className="md:hidden">
        <button
          onClick={toggleModal}
          style={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        >
          <img src="./src/assets/icon-hamburguer.svg" alt="Ícone de Menu" />
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex z-50">
            <div className="bg-white p-4 rounded-md">
              <div className="flex justify-between py-2 border-stone-900 border-b-2">
                <p className="text-black">Páginas</p>
                <button
                  className="px-1 text-stone-900 border border-stone-900 rounded hover:text-white hover:bg-orange-500"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="block py-2 text-stone-900 hover:text-orange-500"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produtos"
                    className="block py-2 text-stone-900 hover:text-orange-500"
                    onClick={handleLinkClick}
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categorias"
                    className="block py-2 text-stone-900 hover:text-orange-500"
                    onClick={handleLinkClick}
                  >
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meuspedidos"
                    className="block py-2 text-stone-900 hover:text-orange-500"
                    onClick={handleLinkClick}
                  >
                    Meus Pedidos
                  </Link>
                </li>
              </ul>
              <ul className="flex justify-center py-2 w-56 gap-3 mt-4 border-stone-900 border-t-2">
                <li>
                  <Link to="/cadastro" onClick={closeModal}>
                    <button className="text-stone-500 py-2 hover:text-orange-600">
                      Cadastre-se
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={closeModal}>
                    <button className="bg-blue-900 w-28 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      Entrar
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
