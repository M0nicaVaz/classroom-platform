import { DefaultUi, Player, Youtube } from '@vime/react';
import { Button } from './Button';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[68.75rem] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="Ox_zb2cs9zM" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[68.75rem] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 1 - Abertura do ignite lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/M0nicaVaz.png"
                alt="profile picture"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Monica Vaz</strong>
                <span className="text-sm text-gray-200 block ">Student</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <Button variant="green">
              <Lightning size={24} />
              Acesse o desafio
            </Button>

            <Button variant="blue">
              <DiscordLogo size={24} />
              Comunidade do discord
            </Button>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl"> Material complementar </strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento.
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl"> Wallpapers exclusivos </strong>
              <p className="text-sm text-gray-200 mt-2">Faça o seu download!</p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
