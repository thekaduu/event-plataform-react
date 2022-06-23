import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Content } from '../components/Content'

export default function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Content />
        <Sidebar />
      </main>
    </div>
  )
}