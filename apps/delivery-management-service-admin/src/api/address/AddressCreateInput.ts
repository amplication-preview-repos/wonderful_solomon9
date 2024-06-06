import { CompanyCreateNestedManyWithoutAddressesInput } from "./CompanyCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  city?: string | null;
  companies?: CompanyCreateNestedManyWithoutAddressesInput;
  country?: string | null;
  lat?: number | null;
  long?: number | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
};
