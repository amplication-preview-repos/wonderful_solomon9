import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { RouteCreateNestedManyWithoutRidersInput } from "./RouteCreateNestedManyWithoutRidersInput";

export type RiderCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  routes?: RouteCreateNestedManyWithoutRidersInput;
};
