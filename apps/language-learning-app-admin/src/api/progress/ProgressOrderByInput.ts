import { SortOrder } from "../../util/SortOrder";

export type ProgressOrderByInput = {
  completedAt?: SortOrder;
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lessonId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
