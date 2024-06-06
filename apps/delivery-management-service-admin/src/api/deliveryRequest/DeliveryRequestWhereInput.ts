import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackageModelListRelationFilter } from "../packageModel/PackageModelListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DeliveryRequestWhereInput = {
  company?: CompanyWhereUniqueInput;
  deliveryStatus?: "Option1";
  destinationAddress?: StringNullableFilter;
  id?: StringFilter;
  packages?: PackageModelListRelationFilter;
  receiver?: StringNullableFilter;
  requestedOn?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  sourceAddress?: StringNullableFilter;
};
