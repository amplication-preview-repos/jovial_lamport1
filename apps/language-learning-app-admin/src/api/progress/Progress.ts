import { Course } from "../course/Course";
import { Lesson } from "../lesson/Lesson";
import { User } from "../user/User";

export type Progress = {
  completedAt: Date | null;
  course?: Course | null;
  createdAt: Date;
  id: string;
  lesson?: Lesson | null;
  updatedAt: Date;
  user?: User | null;
};
