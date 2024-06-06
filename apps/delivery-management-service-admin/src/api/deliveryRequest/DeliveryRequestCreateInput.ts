import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PackageModelCreateNestedManyWithoutDeliveryRequestsInput } from "./PackageModelCreateNestedManyWithoutDeliveryRequestsInput";

export type DeliveryRequestCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  deliveryStatus?: "Option1" | null;
  destinationAddress?: string | null;
  packages?: PackageModelCreateNestedManyWithoutDeliveryRequestsInput;
  receiver?: string | null;
  requestedOn?: Date | null;
  sender?: string | null;
  sourceAddress?: string | null;
};
