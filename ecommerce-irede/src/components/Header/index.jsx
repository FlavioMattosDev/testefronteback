import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Carrinho from '../Carrinho';
import NavbarMobile from '../NavbarMobile';

export default function Header() {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null); // Defina o estado do usuário

  const hideHeader =
    location.pathname === '/login' || location.pathname === '/cadastro';
  if (hideHeader) {
    return null;
  }

  return (
    <header className="bg-blue-900 ">
      <div className="md:hidden pb-8">
        <div className="mx-8 pt-9 flex justify-between">
          <NavbarMobile />
          <img
            className="h-[28px]"
            src="./src/assets/img-logo-erede.png"
            alt="Logo do E-Rede Store"
          />
          <Carrinho />
        </div>

        <div className="mt-3 mx-8 relative flex">
          <img
            className="absolute top-[50%] translate-y-[-50%] left-3"
            src="./src/assets/icon-search.svg"
            alt=""
          />
          <input
            className="w-full py-2 pl-8 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="Buscar"
          />
        </div>
      </div>

      <div className="hidden md:block md:pb-11 md:pt-9">
        <div className="mx-8 flex justify-around items-center">
          <div className="w-[18.1rem]">
            <img
              className="h-[28px]"
              src="./src/assets/img-logo-erede.png"
              alt="Logo do E-Rede Store"
            />
          </div>

          <div className="relative w-[30rem] mr-4">
            <img
              className="absolute top-[50%] translate-y-[-50%] left-3"
              src="./src/assets/icon-search.svg"
              alt=""
            />
            <input
              className="w-full py-2 pl-8 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Buscar"
            />
          </div>

          <div className="flex items-center min-w-[15rem] justify-between">
            {user ? (
              <div className="flex items-center justify-center gap-5">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-10 w-10 rounded-full hidden lg:block"
                />
                <h1 className="hidden lg:block">Olá, {user.name}</h1>
              </div>
            ) : (
              <>
                <Link to="/cadastro">
                  <button className="text-zinc-50">Cadastre-se</button>
                </Link>
                <Link to="/login">
                  <button className="bg-orange-500 text-zinc-50 font-semibold px-8 py-2 rounded-md">
                    Entrar
                  </button>
                </Link>{' '}
              </>
            )}
            <Carrinho />
          </div>
        </div>
      </div>
    </header>
  );
}
