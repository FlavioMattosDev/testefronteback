import { useParams } from 'react-router-dom';

export default function DetalhesProduto() {
  const { detalhesproduto } = useParams();

  return (
    <div>
      <section className="my-12 mx-8">
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-2xl md:flex-row md:items-center md:mx-auto">
          <img
            className="min-h-50 max-h-64 w-full rounded-t-lg object-contain md:object-fit md:h-auto md:rounded-none md:rounded-l-lg"
            src="./src/assets/img-shoes-card.png"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <p className="mb-2 text-2xl text-blue-900 font-semibold">
              Sapato Esportivo
            </p>
            <p className="mb-2 text-stone-500 font-medium">Tênis</p>
            <p className="mb-2 text-sm text-stone-500 font-medium">
              O smartwatch é o seu companheiro ideal para uma vida mais
              saudável, conectada e cheia de estilo. Com ele, você recebe
              notificações do seu smartphone, monitora sua saúde (batimentos
              cardíacos, pressão arterial, oxigênio no sangue e qualidade do
              sono), acompanha seus treinos com diversos recursos e ainda
              desfruta de um design elegante e moderno com diversas pulseiras
              intercambiáveis.
            </p>
            <div className="flex items-center mt-4">
              <label for="quantidade" className="mr-2">
                Quantidade:
              </label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                className="px-3 py-1 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <p className="hidden md:block md:text-center pt-4 text-stone-500 font-medium">
              100 itens disponíveis
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-900 text-white text-center text-sm font-medium rounded-md">
              Comprar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
