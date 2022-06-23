import { gql } from "@apollo/client";

export interface LessonInterface {
  title: string,
  slug: string,
  availableAt: Date,
  lessonType: 'class' | 'live'
}

export interface GetListLessonsResponse {
  lessons: Array<LessonInterface>
}

export const GET_LIST_LESSONS = gql`
query GetListLessons {
  lessons {
    availableAt
    slug
    lessonType
    title
  }
}
`