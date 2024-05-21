import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";
import { ProgressUpdateManyWithoutCoursesInput } from "./ProgressUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  language?: string | null;
  lessons?: LessonUpdateManyWithoutCoursesInput;
  level?: "Option1" | null;
  progresses?: ProgressUpdateManyWithoutCoursesInput;
  title?: string | null;
};
