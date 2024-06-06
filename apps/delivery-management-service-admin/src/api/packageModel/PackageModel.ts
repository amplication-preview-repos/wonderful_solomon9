import { DeliveryRequest } from "../deliveryRequest/DeliveryRequest";
import { JsonValue } from "type-fest";

export type PackageModel = {
  contentDescription: string | null;
  createdAt: Date;
  deliveryRequest?: DeliveryRequest | null;
  dimensions: JsonValue;
  id: string;
  updatedAt: Date;
  weight: number | null;
};
