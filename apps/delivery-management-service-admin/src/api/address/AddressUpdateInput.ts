import { CompanyUpdateManyWithoutAddressesInput } from "./CompanyUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  companies?: CompanyUpdateManyWithoutAddressesInput;
  country?: string | null;
  lat?: number | null;
  long?: number | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
};
