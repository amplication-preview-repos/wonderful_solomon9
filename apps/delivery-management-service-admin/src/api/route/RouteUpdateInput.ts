import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RouteUpdateInput = {
  destinationAddress?: string | null;
  distance?: number | null;
  estimatedTime?: number | null;
  rider?: RiderWhereUniqueInput | null;
  sourceAddress?: string | null;
};
