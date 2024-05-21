import { InputJsonValue } from "../../types";
import { ProgressUpdateManyWithoutUsersInput } from "./ProgressUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  profilePicture?: InputJsonValue;
  progresses?: ProgressUpdateManyWithoutUsersInput;
  username?: string | null;
};
