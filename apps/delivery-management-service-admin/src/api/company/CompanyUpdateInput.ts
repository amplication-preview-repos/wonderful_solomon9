import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DeliveryRequestUpdateManyWithoutCompaniesInput } from "./DeliveryRequestUpdateManyWithoutCompaniesInput";
import { RiderUpdateManyWithoutCompaniesInput } from "./RiderUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  deliveryRequests?: DeliveryRequestUpdateManyWithoutCompaniesInput;
  name?: string | null;
  riders?: RiderUpdateManyWithoutCompaniesInput;
};
