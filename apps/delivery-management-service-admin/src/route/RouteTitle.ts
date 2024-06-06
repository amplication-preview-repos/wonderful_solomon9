import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "destinationAddress";

export const RouteTitle = (record: TRoute): string => {
  return record.destinationAddress?.toString() || String(record.id);
};
