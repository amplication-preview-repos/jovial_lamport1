import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProgressCreateInput = {
  completedAt?: Date | null;
  course?: CourseWhereUniqueInput | null;
  lesson?: LessonWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
