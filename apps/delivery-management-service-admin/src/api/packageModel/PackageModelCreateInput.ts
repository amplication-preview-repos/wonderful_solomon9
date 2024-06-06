import { DeliveryRequestWhereUniqueInput } from "../deliveryRequest/DeliveryRequestWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PackageModelCreateInput = {
  contentDescription?: string | null;
  deliveryRequest?: DeliveryRequestWhereUniqueInput | null;
  dimensions?: InputJsonValue;
  weight?: number | null;
};
