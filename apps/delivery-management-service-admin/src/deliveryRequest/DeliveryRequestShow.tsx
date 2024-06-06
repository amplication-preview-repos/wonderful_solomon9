import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DELIVERYREQUEST_TITLE_FIELD } from "./DeliveryRequestTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const DeliveryRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryStatus" source="deliveryStatus" />
        <TextField label="destinationAddress" source="destinationAddress" />
        <TextField label="ID" source="id" />
        <TextField label="receiver" source="receiver" />
        <TextField label="requestedOn" source="requestedOn" />
        <TextField label="sender" source="sender" />
        <TextField label="sourceAddress" source="sourceAddress" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PackageModel"
          target="deliveryRequestId"
          label="Packages"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
