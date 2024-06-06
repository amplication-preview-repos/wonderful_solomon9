import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  companies?: CompanyListRelationFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  lat?: FloatNullableFilter;
  long?: FloatNullableFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
};
