import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categorias')
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data); // Define as categorias recebidas da API
      })
      .catch((error) => console.error('Erro ao buscar categorias:', error));
  }, []);

  return (
    <>
      {/* Versão mobile */}
      <section className="my-12 mx-4 md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {categorias.map((categoria) => (
            <Link
              to={`/produtos?categoria=${categoria.nome}`}
              key={categoria.id}
            >
              <div className="flex flex-col justify-center items-center py-3 px-6 bg-slate-100 rounded-lg shadow-md">
                <img
                  className="h-[80px] rounded-md"
                  src="./src/assets/img-shoes-card.png"
                  alt=""
                />
                <p className="font-bold mt-2">{categoria.nome}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Versão desktop */}
      <section className="my-12 mx-8 hidden md:block">
        <div className="grid grid-cols-4 gap-8">
          {categorias.map((categoria) => (
            <Link
              to={`/produtos?categoria=${categoria.nome}`}
              key={categoria.id}
            >
              <div className="flex flex-col justify-center items-center py-3 px-6 bg-slate-100 rounded-lg shadow-md">
                <img
                  className="h-[80px] rounded-md"
                  src="./src/assets/img-shoes-card.png"
                  alt=""
                />
                <p className="font-bold mt-2">{categoria.nome}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
