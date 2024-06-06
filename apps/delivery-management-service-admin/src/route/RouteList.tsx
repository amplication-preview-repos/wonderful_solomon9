import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RIDER_TITLE_FIELD } from "../rider/RiderTitle";

export const RouteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Routes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="destinationAddress" source="destinationAddress" />
        <TextField label="distance" source="distance" />
        <TextField label="estimatedTime" source="estimatedTime" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Rider" source="rider.id" reference="Rider">
          <TextField source={RIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="sourceAddress" source="sourceAddress" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
