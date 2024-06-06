import { SortOrder } from "../../util/SortOrder";

export type DeliveryRequestOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  deliveryStatus?: SortOrder;
  destinationAddress?: SortOrder;
  id?: SortOrder;
  receiver?: SortOrder;
  requestedOn?: SortOrder;
  sender?: SortOrder;
  sourceAddress?: SortOrder;
  updatedAt?: SortOrder;
};
