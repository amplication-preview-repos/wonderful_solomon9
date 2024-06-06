import { Company } from "../company/Company";
import { PackageModel } from "../packageModel/PackageModel";

export type DeliveryRequest = {
  company?: Company | null;
  createdAt: Date;
  deliveryStatus?: "Option1" | null;
  destinationAddress: string | null;
  id: string;
  packages?: Array<PackageModel>;
  receiver: string | null;
  requestedOn: Date | null;
  sender: string | null;
  sourceAddress: string | null;
  updatedAt: Date;
};
