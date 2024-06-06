import { Company } from "../company/Company";
import { Route } from "../route/Route";

export type Rider = {
  company?: Company | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  routes?: Array<Route>;
  updatedAt: Date;
};
