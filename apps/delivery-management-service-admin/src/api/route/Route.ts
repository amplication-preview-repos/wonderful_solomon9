import { Rider } from "../rider/Rider";

export type Route = {
  createdAt: Date;
  destinationAddress: string | null;
  distance: number | null;
  estimatedTime: number | null;
  id: string;
  rider?: Rider | null;
  sourceAddress: string | null;
  updatedAt: Date;
};
