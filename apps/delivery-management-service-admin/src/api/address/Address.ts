import { Company } from "../company/Company";

export type Address = {
  city: string | null;
  companies?: Array<Company>;
  country: string | null;
  createdAt: Date;
  id: string;
  lat: number | null;
  long: number | null;
  postalCode: string | null;
  state: string | null;
  street: string | null;
  updatedAt: Date;
};
