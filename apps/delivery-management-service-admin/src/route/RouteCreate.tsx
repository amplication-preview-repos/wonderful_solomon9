import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RiderTitle } from "../rider/RiderTitle";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="destinationAddress" source="destinationAddress" />
        <NumberInput label="distance" source="distance" />
        <NumberInput label="estimatedTime" source="estimatedTime" />
        <ReferenceInput source="rider.id" reference="Rider" label="Rider">
          <SelectInput optionText={RiderTitle} />
        </ReferenceInput>
        <TextInput label="sourceAddress" source="sourceAddress" />
      </SimpleForm>
    </Create>
  );
};
