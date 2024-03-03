import { useLocation } from 'react-router-dom';

function SocialIcon({ src, alt }) {
  return (
    <a className="min-w-4" href="#">
      <img src={src} alt={alt} />
    </a>
  );
}

function FooterLink({ text }) {
  return <p className="text-white text-xs pb-2 hover:cursor-pointer">{text}</p>;
}

export default function Footer() {
  const location = useLocation();
  const hideFooter =
    location.pathname === '/login' || location.pathname === '/cadastro';
  if (hideFooter) {
    return;
  }
  return (
    <footer className="bg-blue-900 p-6 bottom-0 w-full">
      <div className="flex gap-[30px] justify-center">
        <div className="flex flex-col gap-[22px] w-auto">
          <img
            className="min-w-[72px] max-w-[72px]"
            src="./src/assets/img-logo-erede.png"
            alt="Logo do E-Rede Store"
          />
          <div className="flex gap-6">
            <SocialIcon src="./src/assets/icon-facebook.svg" alt="fb" />
            <SocialIcon src="./src/assets/icon-instagram.svg" alt="ig" />
            <SocialIcon src="./src/assets/icon-wpp.svg" alt="wpp" />
          </div>
        </div>
        <p className="text-xs text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum magnam
          soluta odit. Facilis ut reprehenderit exercitationem unde.
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-x-10 md:justify-around">
        <div className="mt-6">
          <p className="text-white text-xs font-bold pb-3">Informações</p>
          <FooterLink text="Sobre o E-Rede Store" />
          <FooterLink text="Segurança" />
          <FooterLink text="Lista de desejos" />
          <FooterLink text="Trabalhe Conosco" />
        </div>

        <div className="mt-6">
          <p className="text-white text-xs font-bold pb-3">Produtos</p>
          <FooterLink text="Tênis" />
          <FooterLink text="Camiseta" />
          <FooterLink text="Acessórios" />
          <FooterLink text="Esportivo" />
        </div>

        <div className="mt-6">
          <p className="text-white text-xs font-bold pb-3">Localização</p>
          <p className="text-white text-xs pb-3">Rua Martinho Rodrigues, 331</p>
          <p className="text-white text-xs pb-3">
            Bairro de Fátima, Fortaleza-CE
          </p>
        </div>
      </div>

      <div className="border-[1px] mt-6"></div>
      <p className="mt-6 text-xs text-white text-center">2023 Irede</p>
    </footer>
  );
}
