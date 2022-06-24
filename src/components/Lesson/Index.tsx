import { CheckCircle, Lock } from 'phosphor-react'
import LessonProps from './LessonProps'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'

export function Lesson(props: LessonProps) {
  const { slug } = useParams()
  const isActive = slug == props.slug

  const avialableAt =  moment(props.availableAt)
  const now = moment()

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

  let linkTo = `/aulas/${props.slug}`

  let renderLessonHeader = (
    <span className="lesson-content-free text-sm flex items-center gap-2 text-blue-500 font-medium">
      <CheckCircle size={20} />
      Conteúdo liberado
    </span>
  )

  if (avialableAt.isAfter(now)) {
    linkTo = '#'
    renderLessonHeader = (
      <span className="text-sm flex items-center gap-2 text-orange-500 font-medium">
        <Lock size={20} />
        Em breve
      </span>
    )
  }


  return  (
    <Link to={linkTo} className={`group lesson-card ${isActive ? 'active' : ''}`}>
      <span className="lesson-date" >{ renderFormattedDate() }</span>
      <div className='lesson-body group-hover:border-green-500 transition-colors'>
        <header className="flex items-center justify-between">
          { renderLessonHeader }
          <span className={`lesson-type ${props.type}`}>
            { props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>

        <strong className="lesson-title">
          { props.title }
        </strong>
      </div>
    </Link>
  )
}