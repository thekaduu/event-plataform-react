import { TeacherInterface } from './TeacherInterface';
export interface LessonInterface {
  title: string,
  slug: string,
  availableAt: Date,
  lessonType: 'class' | 'live',
  teacher?: TeacherInterface,
  description?: string,
  videoId?: string
}