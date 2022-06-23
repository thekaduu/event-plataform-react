import { LessonInterface } from './interfaces/LessonInterface';
import { gql } from "@apollo/client";

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

export const GET_LESSON_BY_SLUG = gql`
query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    description
    lessonType
    slug
    title
    teacher {
      avatarURL
      bio
      name
    }
    videoId
  }
}
`