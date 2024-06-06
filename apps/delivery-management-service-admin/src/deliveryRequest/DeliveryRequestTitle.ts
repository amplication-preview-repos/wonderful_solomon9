import { DeliveryRequest as TDeliveryRequest } from "../api/deliveryRequest/DeliveryRequest";

export const DELIVERYREQUEST_TITLE_FIELD = "destinationAddress";

export const DeliveryRequestTitle = (record: TDeliveryRequest): string => {
  return record.destinationAddress?.toString() || String(record.id);
};
