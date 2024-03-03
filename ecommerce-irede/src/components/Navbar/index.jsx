import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/cadastro";
  if (hideNavbar) {
    return;
  }

  return (
    <section className="hidden md:block">
      <nav className="h-10 bg-blue-900 font-semibold text-zinc-50 flex flex-row items-center justify-center gap-10">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link to="/produtos" className="hover:text-orange-500">
          Produtos
        </Link>
        <Link to="/categorias" className="hover:text-orange-500">
          Categorias
        </Link>
        <Link to="/meuspedidos" className="hover:text-orange-500">
          Meus Pedidos
        </Link>
      </nav>
    </section>
  );
}
