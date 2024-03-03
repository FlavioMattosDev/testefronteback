import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { CartProvider } from './context/carrinhoContext';
import { ProductProvider } from './context/produtoContext';
import { UserProvider } from './context/usuarioContext';

function App() {
  
  return (
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <div className="App flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <div className="flex-grow">
              <Outlet />
            </div>
            <Footer />
          </div>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
