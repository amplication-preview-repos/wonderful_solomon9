import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DELIVERYREQUEST_TITLE_FIELD } from "../deliveryRequest/DeliveryRequestTitle";

export const PackageModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
