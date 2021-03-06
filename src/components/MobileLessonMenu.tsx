import { useQuery } from "@apollo/client";
import { LessonInterface } from "../application/interfaces/LessonInterface";
import { GET_LIST_LESSONS, GetListLessonsResponse } from "../application/Queries";
import { Lesson } from "./Lesson/Index";


const renderListLessons = (lessons: Array<LessonInterface>) => {
  return lessons.map(lesson => {
    return (
      <Lesson
        title={lesson.title}
        availableAt={ lesson.availableAt }
        slug={lesson.slug}
        type={lesson.lessonType}
        key={lesson.slug}
      />
    )
  })
}

export function MobileLessonMenu() {
  const { data } = useQuery<GetListLessonsResponse>(GET_LIST_LESSONS)
  const lessons = data?.lessons || []


  return (
    <div className="w-full min-h-screen bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 border-b border-gray-500 block mb-6">Cronograma de aulas</span>

      <div className="flex flex-col gap-8">
       { renderListLessons(lessons) }
      </div>
    </div>
  )
}