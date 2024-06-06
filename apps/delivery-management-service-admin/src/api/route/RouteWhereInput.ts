import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RouteWhereInput = {
  destinationAddress?: StringNullableFilter;
  distance?: FloatNullableFilter;
  estimatedTime?: FloatNullableFilter;
  id?: StringFilter;
  rider?: RiderWhereUniqueInput;
  sourceAddress?: StringNullableFilter;
};
