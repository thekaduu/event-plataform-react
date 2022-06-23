import { CheckCircle, Lock } from 'phosphor-react'
import LessonProps from './LessonProps'
import moment from 'moment'
import { Link } from 'react-router-dom'

export function Lesson(props: LessonProps) {
  const avialableAt =  moment(props.availableAt)
  const now = moment()
  const renderLessonType = () => {
    if (props.type == 'live') {
      return (
        <span className="text-xs rounded py-[0.125rem] px-2 border border-green-300 text-green-300 font-bold">AO VIVO</span>
      )
    }

    return  (
      <span className="text-xs rounded py-[0.125rem] px-2 border border-green-300 font-bold">AULA PRÁTICA</span>
    )
  }

  const renderFormattedDate = (): string => {
    moment.locale('pt-BR')
    const { availableAt } = props
    const momentDate = moment(availableAt)
    const day =  momentDate.format('dddd')
    const date =  momentDate.format('D')
    const month = momentDate.format('MMMM')
    const hour =  momentDate.format('H')
    const minutes =  momentDate.format('mm')

    return `${day} • ${date} de ${month} • ${hour}h${minutes}`
  }

  let cardClassName = 'rounded border-gray-500 border p-4 mt-2 group-hover:border-green-500 transition-colors'
  let linkTo = `/aulas/${props.slug}`

  let renderLessonHeader = (
    <span className="text-sm flex items-center gap-2 text-blue-500 font-medium">
      <CheckCircle size={20} />
      Conteúdo liberado
    </span>
  )

  if (avialableAt.isAfter(now)) {
    cardClassName = 'rounded border-gray-500 border p-4 mt-2 cursor-not-allowed'
    linkTo = '#'
    renderLessonHeader = (
      <span className="text-sm flex items-center gap-2 text-orange-500 font-medium">
        <Lock size={20} />
        Em breve
      </span>
    )
  }


  return  (
    <Link to={linkTo} className="group">
      <span className="text-gray-300" >{ renderFormattedDate() }</span>
      <div className={cardClassName}>
        <header className="flex items-center justify-between">
          { renderLessonHeader }
          {renderLessonType()}
        </header>

        <strong className="mt-5 block text-gray-200">
          { props.title }
        </strong>
      </div>
    </Link>
  )
}