import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  profilePicture?: JsonFilter;
  progresses?: ProgressListRelationFilter;
  username?: StringNullableFilter;
};
