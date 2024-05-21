import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  lessons?: LessonListRelationFilter;
  level?: "Option1";
  progresses?: ProgressListRelationFilter;
  title?: StringNullableFilter;
};
