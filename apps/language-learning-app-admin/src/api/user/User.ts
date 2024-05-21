import { JsonValue } from "type-fest";
import { Progress } from "../progress/Progress";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  profilePicture: JsonValue;
  progresses?: Array<Progress>;
  updatedAt: Date;
  username: string | null;
};
