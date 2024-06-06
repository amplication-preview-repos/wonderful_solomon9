import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PackageModelUpdateManyWithoutDeliveryRequestsInput } from "./PackageModelUpdateManyWithoutDeliveryRequestsInput";

export type DeliveryRequestUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  deliveryStatus?: "Option1" | null;
  destinationAddress?: string | null;
  packages?: PackageModelUpdateManyWithoutDeliveryRequestsInput;
  receiver?: string | null;
  requestedOn?: Date | null;
  sender?: string | null;
  sourceAddress?: string | null;
};
