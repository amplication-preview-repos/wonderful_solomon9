import { DeliveryRequestWhereUniqueInput } from "../deliveryRequest/DeliveryRequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PackageModelUpdateInput = {
  contentDescription?: string | null;
  deliveryRequest?: DeliveryRequestWhereUniqueInput | null;
  dimensions?: InputJsonValue;
  weight?: number | null;
};
