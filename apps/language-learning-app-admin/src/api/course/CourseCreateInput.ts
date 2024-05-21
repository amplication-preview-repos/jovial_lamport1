import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";
import { ProgressCreateNestedManyWithoutCoursesInput } from "./ProgressCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  description?: string | null;
  language?: string | null;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
  level?: "Option1" | null;
  progresses?: ProgressCreateNestedManyWithoutCoursesInput;
  title?: string | null;
};
