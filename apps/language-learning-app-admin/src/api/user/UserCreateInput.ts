import { InputJsonValue } from "../../types";
import { ProgressCreateNestedManyWithoutUsersInput } from "./ProgressCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  profilePicture?: InputJsonValue;
  progresses?: ProgressCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
