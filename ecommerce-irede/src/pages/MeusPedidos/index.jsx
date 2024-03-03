import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/usuarioContext';

export default function MeusPedidos() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <section class="my-12 mx-8 md:hidden">
        <div class="mb-4">
          <select
            id="categoria"
            name="categoria"
            class="mt-1 block w-full py-2 px-3 border text-zinc-50 bg-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="tenis" selected>
              Meus Pedidos
            </option>
            <option value="blusa">Minhas Informações</option>
          </select>
        </div>
        <div class="bg-slate-100 p-4 rounded-md">
          <p class="text-slate-900 font-semibold mb-2">Meus Pedidos</p>

          <div class="divide-y">
            <div class="py-2">
              <div class="flex justify-between">
                <img
                  class="w-24 rounded-md"
                  src="./src/assets/img-shoes-card.png"
                  alt=""
                />
                <div>
                  <p class="text-sm font-semibold">Nique Air Surf</p>
                  <p class="text-[0.7rem] text-stone-500 font-semibold">
                    Tênis
                  </p>
                  <p class="text-xs font-semibold">R$ 220,00</p>
                  <p class="text-xs font-semibold text-stone-500">Qtd: 02</p>
                </div>
              </div>
              <div class="flex justify-between mt-2">
                <p class="text-stone-500">Status:</p>
                <p class="text-green-700 font-semibold">Finalizado</p>
              </div>
            </div>
            <div class="py-2">
              <div class="flex justify-between">
                <img
                  class="w-24 rounded-md"
                  src="./src/assets/img-shoes-card.png"
                  alt=""
                />
                <div>
                  <p class="text-sm font-semibold">Nique Air Surf</p>
                  <p class="text-[0.7rem] text-stone-500 font-semibold">
                    Tênis
                  </p>
                  <p class="text-xs font-semibold">R$ 220,00</p>
                  <p class="text-xs font-semibold text-stone-500">Qtd: 02</p>
                </div>
              </div>
              <div class="flex justify-between mt-2">
                <p class="text-stone-500">Status:</p>
                <p class="text-green-700 font-semibold">Finalizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="my-12 mx-8 hidden md:block">
        <div class="flex gap-6">
          <div class="flex flex-col justify-center bg-slate-100 h-1/2 w-56 p-4 rounded-md">
            <div class="flex flex-col space-y-2 font-semibold divide-y">
              <a class="py-2 text-stone-500 hover:text-orange-500" href="#">
                Meus Pedidos
              </a>
              <a class="py-2 text-stone-500 hover:text-orange-500" href="#">
                Minhas Informações
              </a>
            </div>
          </div>
          <div class="divide-y w-full px-4 rounded-md bg-slate-100">
            <div class="py-2 flex items-center justify-between">
              <div class="flex justify-between">
                <div class="flex gap-4 items-center">
                  <img
                    class="w-24 rounded-md"
                    src="./src/assets/img-shoes-card.png"
                    alt=""
                  />
                  <div>
                    <p class="text-sm font-semibold">Nique Air Surf</p>
                    <p class="text-[0.7rem] text-stone-500 font-semibold">
                      Tênis
                    </p>
                    <p class="text-xs font-semibold">R$ 220,00</p>
                    <p class="text-xs font-semibold text-stone-500">Qtd: 02</p>
                  </div>
                </div>
              </div>
              <div class="flex justify-between mt-2">
                <p class="text-green-700 font-semibold">Finalizado</p>
              </div>
            </div>
            <div class="py-2 flex items-center justify-between">
              <div class="flex justify-between">
                <div class="flex gap-4 items-center">
                  <img
                    class="w-24 rounded-md"
                    src="./src/assets/img-shoes-card.png"
                    alt=""
                  />
                  <div>
                    <p class="text-sm font-semibold">Nique Air Surf</p>
                    <p class="text-[0.7rem] text-stone-500 font-semibold">
                      Tênis
                    </p>
                    <p class="text-xs font-semibold">R$ 220,00</p>
                    <p class="text-xs font-semibold text-stone-500">Qtd: 02</p>
                  </div>
                </div>
              </div>
              <div class="flex justify-between mt-2">
                <p class="text-red-600 font-semibold">Esperando Pagamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
