import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { RouteUpdateManyWithoutRidersInput } from "./RouteUpdateManyWithoutRidersInput";

export type RiderUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  routes?: RouteUpdateManyWithoutRidersInput;
};
