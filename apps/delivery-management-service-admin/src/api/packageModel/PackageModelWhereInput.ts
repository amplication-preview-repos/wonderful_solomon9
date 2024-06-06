import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryRequestWhereUniqueInput } from "../deliveryRequest/DeliveryRequestWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PackageModelWhereInput = {
  contentDescription?: StringNullableFilter;
  deliveryRequest?: DeliveryRequestWhereUniqueInput;
  dimensions?: JsonFilter;
  id?: StringFilter;
  weight?: FloatNullableFilter;
};
