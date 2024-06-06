import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RIDER_TITLE_FIELD } from "../rider/RiderTitle";

export const RouteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
