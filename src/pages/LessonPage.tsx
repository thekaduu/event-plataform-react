import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Content } from '../components/Content/Index'

import { GET_LESSON_BY_SLUG } from '../application/Queries'
import { LessonInterface } from '../application/interfaces/LessonInterface'
import { useSelector } from 'react-redux'
import { MobileLessonMenu } from '../components/MobileLessonMenu'


export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useQuery(GET_LESSON_BY_SLUG, { variables: { slug } })
  const lesson: LessonInterface = data?.lesson || {}
  const isOpenMenu = useSelector((state:any) => state.menu.open)
  return (
    <div className='flex flex-col min-h-screen h-full'>
      <Header />
      <main className='flex flex-1 h-full'>
        {
          isOpenMenu ? <MobileLessonMenu /> : <Content lesson={lesson} />
        }

        <Sidebar />
      </main>
    </div>
  )
}