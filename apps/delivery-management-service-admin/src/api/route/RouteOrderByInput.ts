import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  destinationAddress?: SortOrder;
  distance?: SortOrder;
  estimatedTime?: SortOrder;
  id?: SortOrder;
  riderId?: SortOrder;
  sourceAddress?: SortOrder;
  updatedAt?: SortOrder;
};
