import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Content } from '../components/Content/Index'

import { GET_LESSON_BY_SLUG } from '../application/Queries'
import { LessonInterface } from '../application/interfaces/LessonInterface'


export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useQuery(GET_LESSON_BY_SLUG, { variables: { slug } })
  const lesson: LessonInterface = data?.lesson || {}

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Content lesson={lesson} />
        <Sidebar />
      </main>
    </div>
  )
}