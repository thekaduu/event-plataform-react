import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react";
import { VideoPlayer } from "../VideoPlayer/Index";
import { ContentProps } from "./ContentProps";

export function Content(props: ContentProps) {
  return (
    <div className="flex-1">
      {
        props.lesson.videoId ?
        <VideoPlayer videoId={props.lesson.videoId} /> :
        (
          <div className="bg-black flex justify-center">
            <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
              <h1>Carregando</h1>
            </div>
          </div>
        )

      }

      <div className="p-8 max-w-[1100px] mx-auto">
        <div id="description" className="flex flex-col lg:flex-row justify-start gap-6 md:gap-16">
          <div className="flex-1">
            <h1 className="text-bold text-2xl">
              { props.lesson.title }
            </h1>
            <p className="mt-4 leading-relaxed text-gray-200">
              { props.lesson.description }
            </p>

            <div className="flex gap-4 mt-6">
              <img src={props.lesson.teacher?.avatarURL} alt="foto do professor" className="h-16 w-16 rounded-full border-2 border-blue-500" />

              <div className="leading-relaxed">
                <strong className="text-2xl font-bold block">{props.lesson.teacher?.name}</strong>
                <span className="text-gray-200 text-sm block">{props.lesson.teacher?.bio} </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col gap-4">
            <a href="#" className="p-4 text-sm bg-green-500 flex gap-2 items-center rounded justify-center md:justify-start font-bold uppercase hover:bg-green-700 transition-colors">
              <DiscordLogo size={20} /> COMUNIDADE NO DISCORD
            </a>

            <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={20} /> Acesse o desafio
            </a>
          </div>
        </div>

        <div id="additionalContent" className="mt-16 md:mt-20 gap-8 grid lg:grid-cols-2">
          <a href="#" className="rounded overflow-hidden flex items-stretch gap-4 md:gap-6 group hover:bg-gray-600 bg-gray-700 transition-colors">
            <div className="bg-green-500 h-full p-6 flex items-center group-hover:bg-green-700 transition-colors">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <span className="text-bold text-xl md:text-2xl">
                Material complementar
              </span>
              <p className="mt-2 text-gray-200 text-xs md:text-xl leading-relaxed">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>

            <div className="h-full p-6 flex items-center text-blue-500">
              <CaretRight size={24} />
            </div>
          </a>


          <a href="#" className="rounded overflow-hidden flex items-stretch gap-4 md:gap-6 group hover:bg-gray-600 bg-gray-700 transition-colors">
            <div className="bg-green-500 h-full p-6 flex items-center group-hover:bg-green-700 transition-colors">
              <Image size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <span className="text-bold text-xl md:text-2xl">
                Wallpapers exclusivos
              </span>
              <p className="mt-2 text-gray-200 text-xs md:text-xl leading-relaxed">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>

            <div className="h-full p-6 flex items-center text-blue-500">
              <CaretRight size={24} />
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}