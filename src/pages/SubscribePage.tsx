import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_SUBSCRIBER } from "../application/Mutations";
import Logo from "../components/Logo";
import codeMockup from '../assets/images/code-mockup.png'

export function SubscribePage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER)

  const submitSubscribeForm = async (event: FormEvent) => {
    event.preventDefault()

    await createSubscriber({ variables: {name, email} })

    navigate('/aulas/abertura-ignite-lab-o-poder-do-react-js')
  }

  return (
    <div className="min-h-screen  bg-cover bg-no-repeat flex flex-col bg-blur">
      <div className="max-w-[1100px] flex-col md:flex-row mt-2 flex items-center justify-between w-full mx-auto  md:mt-[121px]">
        <div className="max-w-[640px] p-6 md:pr-[200px]">
          <Logo className="mx-auto md:mx-0 block"/>

          <h1 className="text-3xl text-center md:text-left md:text-[2.5rem] mt-8">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="text-gray-200 mt-4 leading-relaxed text-center md:text-left">
          Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="py-8 px-6 md:p-8 bg-gray-700 border w-full border-gray-500 rounded max-w-[391px]">
          <span className="font-bold text-white mb-6 text-[18px] md:text-2xl block" >Inscreva-se gratuitamente</span>

          <form onSubmit={submitSubscribeForm} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
              className="active:border-green-500 hover:border-green-500  border border-gray-900  p-2 bg-gray-900 tex-white rounded"
            />

            <input
              type="text"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
              className="active:border-green-500 hover:border-green-500  border border-gray-900 mb-6 p-2 bg-gray-900 tex-white rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className="uppercase w-full p-2 bg-green-500 rounded hover:bg-green-700 transition-colors disabled:bg-opacity-50"
            >
              garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1100px] w-full mx-auto flex items-center justify-between">
        <img src={codeMockup} alt="exemplo de código" />
      </div>
    </div>
  )
}