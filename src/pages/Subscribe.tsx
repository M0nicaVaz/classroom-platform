import { Logo } from '../components/Logo';

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[68.75rem] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Lorem ipsum dolor sit
            <strong className="text-blue-500"> amet consectetur </strong>.
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos enim,
            perferendis voluptatum illo autem debitis fuga repellendus culpa
            numquam alias.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente!
          </strong>

          <form action="" className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />

            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
            />

            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-5 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code.png" className="mt-10" alt="code" />
    </div>
  );
}
