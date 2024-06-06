import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DeliveryRequestListRelationFilter } from "../deliveryRequest/DeliveryRequestListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RiderListRelationFilter } from "../rider/RiderListRelationFilter";

export type CompanyWhereInput = {
  address?: AddressWhereUniqueInput;
  deliveryRequests?: DeliveryRequestListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  riders?: RiderListRelationFilter;
};
