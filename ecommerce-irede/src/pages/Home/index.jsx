import { ProductProvider } from '../../context/produtoContext';
import CardDestaques from '../../components/CardDestaques';

export default function Home() {
  return (
    <ProductProvider>
      <main>
        {/* Seção de promoção */}
        <section className="relative max-h-[354p] md:hidden">
          <img
            src="./src/assets/img-main-mobile.png"
            alt="Banner promoção de sapato"
          />
          <a
            className="mx-8 absolute inset-x-0 bottom-[27px] bg-orange-500 text-white font-semibold text-center p-[10px] rounded-md"
            href="#"
          >
            Aproveitar Oferta
          </a>
        </section>

        <section className="relative hidden md:block ">
          <img
            className="w-full mx-auto"
            src="./src/assets/img-main-desktop.png"
            alt="Banner promoção de sapato"
          />
          <a
            className="absolute md:w-[15rem] lg:w-[20rem] md:bottom-[30%] lg:bottom-[30%] md:right-[5%] lg:right-[10%] bg-orange-500 text-white font-semibold text-center p-[10px] rounded-md"
            href="#"
          >
            Aproveitar Oferta
          </a>
        </section>

        {/* Seção dos cards */}
        <section>
          <h2 className="mx-8 pt-[27px] mb-[19px] text-xl text-blue-900 font-semibold">
            Destaques
          </h2>

          {/* Container dos cards */}
          <div className="mx-3 mb-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2.5 gap-y-[30px] place-items-center">
            {/* Renderizando os cards de destaques */}
            <CardDestaques />
          </div>
        </section>
      </main>
    </ProductProvider>
  );
}
