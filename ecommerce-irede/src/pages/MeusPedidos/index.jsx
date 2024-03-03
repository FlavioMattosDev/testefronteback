export default function MeusPedidos() {
  return (
    <>
      <section className="my-12 mx-8 md:hidden">
        <div className="mb-4">
          <select
            id="categoria"
            name="categoria"
            defaultValue="tenis" // Alteração aqui
            className="mt-1 block w-full py-2 px-3 border text-zinc-50 bg-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="tenis">Meus Pedidos</option>{' '}
            {/* Removido selected */}
            <option value="blusa">Minhas Informações</option>
          </select>
        </div>
        <div className="bg-slate-100 p-4 rounded-md">
          <p className="text-slate-900 font-semibold mb-2">Meus Pedidos</p>

          <div className="divide-y">
            <div className="py-2">
              <div className="flex justify-between">
                <img
                  className="w-24 rounded-md"
                  src="./src/assets/img-shoes-card.png"
                  alt=""
                />
                <div>
                  <p className="text-sm font-semibold">Nique Air Surf</p>
                  <p className="text-[0.7rem] text-stone-500 font-semibold">
                    Tênis
                  </p>
                  <p className="text-xs font-semibold">R$ 220,00</p>
                  <p className="text-xs font-semibold text-stone-500">
                    Qtd: 02
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-stone-500">Status:</p>
                <p className="text-green-700 font-semibold">Finalizado</p>
              </div>
            </div>
            <div className="py-2">
              <div className="flex justify-between">
                <img
                  className="w-24 rounded-md"
                  src="./src/assets/img-shoes-card.png"
                  alt=""
                />
                <div>
                  <p className="text-sm font-semibold">Nique Air Surf</p>
                  <p className="text-[0.7rem] text-stone-500 font-semibold">
                    Tênis
                  </p>
                  <p className="text-xs font-semibold">R$ 220,00</p>
                  <p className="text-xs font-semibold text-stone-500">
                    Qtd: 02
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-stone-500">Status:</p>
                <p className="text-green-700 font-semibold">Finalizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 mx-8 hidden md:block">
        <div className="flex gap-6">
          <div className="flex flex-col justify-center bg-slate-100 h-1/2 w-56 p-4 rounded-md">
            <div className="flex flex-col space-y-2 font-semibold divide-y">
              <a className="py-2 text-stone-500 hover:text-orange-500" href="#">
                Meus Pedidos
              </a>
              <a className="py-2 text-stone-500 hover:text-orange-500" href="#">
                Minhas Informações
              </a>
            </div>
          </div>
          <div className="divide-y w-full px-4 rounded-md bg-slate-100">
            <div className="py-2 flex items-center justify-between">
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    className="w-24 rounded-md"
                    src="./src/assets/img-shoes-card.png"
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-semibold">Nique Air Surf</p>
                    <p className="text-[0.7rem] text-stone-500 font-semibold">
                      Tênis
                    </p>
                    <p className="text-xs font-semibold">R$ 220,00</p>
                    <p className="text-xs font-semibold text-stone-500">
                      Qtd: 02
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-green-700 font-semibold">Finalizado</p>
              </div>
            </div>
            <div className="py-2 flex items-center justify-between">
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    className="w-24 rounded-md"
                    src="./src/assets/img-shoes-card.png"
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-semibold">Nique Air Surf</p>
                    <p className="text-[0.7rem] text-stone-500 font-semibold">
                      Tênis
                    </p>
                    <p className="text-xs font-semibold">R$ 220,00</p>
                    <p className="text-xs font-semibold text-stone-500">
                      Qtd: 02
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-red-600 font-semibold">
                  Esperando Pagamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
