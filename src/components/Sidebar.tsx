import { Lesson } from "./Lesson/Index";


export function Sidebar() {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 border-b border-gray-500 block mb-6">Cronograma de aulas</span>

      <div className="flex flex-col gap-8">
       <Lesson title="Abertura do evento Ignite labs" availableAt={ new Date('2022-01-01') } slug="#" type="live" />
       <Lesson title="Abertura do evento Ignite labs" availableAt={ new Date('2022-01-01') } slug="#" type="live" />
       <Lesson title="Abertura do evento Ignite labs" availableAt={ new Date('2022-01-01') } slug="#" type="class" />
       <Lesson title="Abertura do evento Ignite labs" availableAt={ new Date('2022-01-01') } slug="#" type="live" />
       <Lesson title="Abertura do evento Ignite labs" availableAt={ new Date('2022-01-01') } slug="#" type="live" />
       <Lesson title="Abertura do evento Ignite labs" availableAt={ new Date('2022-01-01') } slug="#" type="live" />
      </div>
    </aside>
  )
}