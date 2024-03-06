import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/usuarioContext';
import axiosInstance from '../../axiosConfig';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const handleLogout = () => {
    logoutUser();
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/login', formData);
      const { token } = response.data;
      localStorage.setItem('token', token);

      loginUser({ email: formData.email });

      console.log('Usuário logado com sucesso!');
      setFormData({
        email: '',
        senha: '',
      });
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
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
                Faça Login
              </h2>
              <label htmlFor="email" className="flex font-semibold pt-5">
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
                Entrar
              </button>
            </form>
            <div className="flex justify-center bg-white mx-2 pt-3 px-[22px] pb-9">
              <p className="">Não tem uma conta?</p>
              <a className="pl-1 text-orange-500" href="/cadastro">
                Cadastre-se aqui
              </a>
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
                Faça Login
              </h2>
              <label htmlFor="email" className="flex font-semibold pt-5">
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
                Entrar
              </button>
            </form>
            <div className="flex justify-center mt-[10px]">
              <p className="">Não tem uma conta?</p>
              <a className="pl-1 text-orange-500" href="/cadastro">
                Cadastre-se aqui
              </a>
            </div>
            <button onClick={handleLogout}>Logout</button>
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
