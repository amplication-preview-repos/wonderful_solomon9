import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DeliveryRequestCreateNestedManyWithoutCompaniesInput } from "./DeliveryRequestCreateNestedManyWithoutCompaniesInput";
import { RiderCreateNestedManyWithoutCompaniesInput } from "./RiderCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: AddressWhereUniqueInput | null;
  deliveryRequests?: DeliveryRequestCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
  riders?: RiderCreateNestedManyWithoutCompaniesInput;
};
