import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DELIVERYREQUEST_TITLE_FIELD } from "../deliveryRequest/DeliveryRequestTitle";

export const PackageModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Packages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="contentDescription" source="contentDescription" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="DeliveryRequest"
          source="deliveryrequest.id"
          reference="DeliveryRequest"
        >
          <TextField source={DELIVERYREQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="dimensions" source="dimensions" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
      </Datagrid>
    </List>
  );
};
