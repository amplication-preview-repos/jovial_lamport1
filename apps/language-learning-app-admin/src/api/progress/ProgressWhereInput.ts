import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProgressWhereInput = {
  completedAt?: DateTimeNullableFilter;
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
