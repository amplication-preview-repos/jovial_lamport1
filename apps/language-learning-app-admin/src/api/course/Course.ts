import { Lesson } from "../lesson/Lesson";
import { Progress } from "../progress/Progress";

export type Course = {
  createdAt: Date;
  description: string | null;
  id: string;
  language: string | null;
  lessons?: Array<Lesson>;
  level?: "Option1" | null;
  progresses?: Array<Progress>;
  title: string | null;
  updatedAt: Date;
};
