import { useState, useEffect } from 'react';

export default function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('tenis');
  const [produtos, setProdutos] = useState([]);

  const handleCategoriaChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

  useEffect(() => {
    const fetchProdutosPorCategoria = async () => {
      try {
        const response = await fetch(`http://localhost:5000/produtosPorCategoria?categoria=${categoriaSelecionada}`);
        if (!response.ok) {
          throw new Error('Não foi possível obter os produtos');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProdutosPorCategoria();
  }, [categoriaSelecionada]);

  return (
    <>
      {/* Parte mobile */}
      <section className="my-12 mx-8 md:hidden">
        <div>
          <div className="mx-3 mb-4">
            <select
              id="categoria"
              name="categoria"
              className="mt-1 block w-full py-2 px-3 border text-zinc-50 bg-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={categoriaSelecionada}
              onChange={handleCategoriaChange}
            >
              <option value="tenis">Tênis</option>
              <option value="blusa">Blusa</option>
              <option value="acessorios">Acessórios</option>
              <option value="calcas">Calças</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2.5 gap-y-[30px] place-items-center">
            {produtos.map((produto) => (
              <div className="bg-white w-48 pb-3 rounded-md drop-shadow-md" key={produto.id}>
                <img className="h-[96px] m-auto" src={produto.imagem} alt={produto.nome} />
                <h3 className="text-lg pl-3 font-bold text-blue-900">{produto.nome}</h3>
                <p className="text-xs pl-3 text-slate-300 font-medium">{produto.categoria}</p>
                <p className="text-orange-500 pl-3 font-semibold">R$ {produto.preco}</p>
                <a
                  className="inline-block ml-3 px-4 py-1 bg-blue-900 text-white text-center text-xs font-medium rounded-md"
                  href="#"
                >
                  Detalhes
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parte desktop */}
      <section className="my-12 mx-8 hidden md:block">
        <div className="flex gap-6 justify-evenly">
          <div className="bg-white h-44 w-48 p-4 rounded-md drop-shadow-md">
            <div className="flex flex-col gap-1 space-y-2 font-semibold">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="tenis"
                  name="categoria"
                  value="tenis"
                  className="mr-1"
                  checked={categoriaSelecionada === 'tenis'}
                  onChange={handleCategoriaChange}
                />
                <label htmlFor="tenis">Tênis</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="blusa"
                  name="categoria"
                  value="blusa"
                  className="mr-1"
                  checked={categoriaSelecionada === 'blusa'}
                  onChange={handleCategoriaChange}
                />
                <label htmlFor="blusa">Blusa</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="acessorios"
                  name="categoria"
                  value="acessorios"
                  className="mr-1"
                  checked={categoriaSelecionada === 'acessorios'}
                  onChange={handleCategoriaChange}
                />
                <label htmlFor="acessorios">Acessórios</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="calcas"
                  name="categoria"
                  value="calcas"
                  className="mr-1"
                  checked={categoriaSelecionada === 'calcas'}
                  onChange={handleCategoriaChange}
                />
                <label htmlFor="calcas">Calças</label>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-2.5 gap-y-[30px] place-items-center">
            {produtos.map((produto) => (
              <div className="bg-white w-40 lg:w-44 pb-3 rounded-md drop-shadow-md" key={produto.id}>
                <img className="h-[96px] m-auto" src={produto.imagem} alt={produto.nome} />
                <h3 className="text-lg pl-3 font-bold text-blue-900">{produto.nome}</h3>
                <p className="text-xs pl-3 text-slate-300 font-medium">{produto.categoria}</p>
                <p className="text-orange-500 pl-3 font-semibold">R$ {produto.preco}</p>
                <a
                  className="inline-block ml-3 px-4 py-1 bg-blue-900 text-white text-center text-xs font-medium rounded-md"
                  href="#"
                >
                  Detalhes
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
