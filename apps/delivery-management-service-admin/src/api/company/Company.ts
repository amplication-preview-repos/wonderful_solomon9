import { Address } from "../address/Address";
import { DeliveryRequest } from "../deliveryRequest/DeliveryRequest";
import { Rider } from "../rider/Rider";

export type Company = {
  address?: Address | null;
  createdAt: Date;
  deliveryRequests?: Array<DeliveryRequest>;
  id: string;
  name: string | null;
  riders?: Array<Rider>;
  updatedAt: Date;
};
