import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import App from './App.jsx';
import { UserContext, UserProvider } from './context/usuarioContext';
import './index.css';
import Cadastro from './pages/Cadastro/index.jsx';
import Categorias from './pages/Categorias/index.jsx';
import DetalhesProduto from './pages/DetalhesProduto/index.jsx';
import ErroPage from './pages/ErrorPage/index.jsx';
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/index.jsx';
import MeusPedidos from './pages/MeusPedidos/index.jsx';
import Produtos from './pages/Produtos/index.jsx';

const Main = () => {
  const [isAuth, setIsAuth] = useState(false);
  const user = useContext(UserContext);

  useEffect(() => {
    setIsAuth(!!user);
  }, [user]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErroPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/cadastro',
          element: isAuth ? <Navigate to="/" /> : <Cadastro />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/categorias',
          element: <Categorias />,
        },
        {
          path: '/produtos',
          element: <Produtos />,
        },
        {
          path: '/produtos/:detalhesproduto',
          element: <DetalhesProduto />,
        },
        {
          path: '/meuspedidos',
          element: isAuth ? <MeusPedidos /> : <Navigate to="/login" />,
        },
        {
          path: '/detalhesProduto',
          element: <DetalhesProduto />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
