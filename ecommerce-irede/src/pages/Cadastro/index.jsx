import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/usuarios', formData);
      console.log('Usuário cadastrado com sucesso!');
      // Limpar o formulário após o cadastro bem-sucedido
      setFormData({
        nome: '',
        email: '',
        senha: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };
  return (
    <>
      {/* Celular */}
      <section>
        <div className="bg-blue-900 h-screen md:hidden">
          <div className="container mx-auto">
            <div className="py-[2rem]">
              <img
                className="max-h-[28px] mx-auto"
                src="./src/assets/img-logo-erede.png"
                alt="Logo do E-Rede Store"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white mx-2 pt-3 px-[22px] pb-9"
            >
              <h2 className="flex justify-center text-2xl font-semibold">
                Cadastre-se
              </h2>
              <label htmlFor="nome" className="flex font-semibold pt-5">
                Nome:
              </label>
              <input
                className="w-full mt-2 p-3 bg-slate-100 rounded-md placeholder:text-stone-500 font-medium"
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <label className="flex font-semibold pt-5" htmlFor="email">
                E-mail:
              </label>
              <input
                className="w-full mt-2 p-3 bg-slate-100 rounded-md placeholder:text-stone-500 font-medium"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="flex font-semibold pt-5" htmlFor="senha">
                Senha:
              </label>
              <input
                className="w-full mt-2 p-3 bg-slate-100 rounded-md placeholder:text-stone-500 font-medium"
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <button
                className="w-full py-5 mt-[22px] bg-orange-500 text-white font-semibold rounded-md"
                type="submit"
              >
                Cadastrar
              </button>
            </form>
            <div className="flex justify-center bg-white mx-2 pt-3 px-[22px] pb-9">
              <p className="">Já possui cadastro?</p>
              <Link to="/login">
              <a className="pl-1 text-orange-500" href="#">
                Clique aqui
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* desktop */}
      <section className="hidden md:block">
        <div className="flex">
          <div className="bg-slate-100 flex flex-col items-center justify-center w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white min-w-[350px] w-2/3 mx-2 pt-3 px-[22px] pb-9"
            >
              <h2 className="flex justify-center text-2xl font-semibold">
                Cadastre-se
              </h2>
              <label htmlFor="nome" className="flex font-semibold pt-5">
                Nome:
              </label>
              <input
                className="w-full mt-2 p-3 bg-slate-100 rounded-md placeholder:text-stone-500 font-medium"
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <label className="flex font-semibold pt-5" htmlFor="email">
                E-mail:
              </label>
              <input
                className="w-full mt-2 p-3 bg-slate-100 rounded-md placeholder:text-stone-500 font-medium"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="flex font-semibold pt-5" htmlFor="senha">
                Senha:
              </label>
              <input
                className="w-full mt-2 p-3 bg-slate-100 rounded-md placeholder:text-stone-500 font-medium"
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full py-5 mt-[22px] bg-orange-500 text-white font-semibold rounded-md"
              >
                Cadastrar
              </button>
            </form>
            <div className="flex justify-center mt-[10px]">
              <p className="">Já possui cadastro?</p>
              <Link to="/login">
              <a className="pl-1 text-orange-500" href="#">
                Clique aqui
              </a>
              </Link>
            </div>
          </div>
          <div className="bg-blue-900 flex w-1/2 h-screen">
            <div className="flex flex-col justify-center items-center mx-auto gap-7">
              <p className="text-[2rem] text-white text-center">
                Sua nova experiência em compras online
              </p>
              <img
                className="w-[20rem] object-contain"
                src="./src/assets/img-logo-erede.png"
                alt="Logo do E-Rede Store"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
