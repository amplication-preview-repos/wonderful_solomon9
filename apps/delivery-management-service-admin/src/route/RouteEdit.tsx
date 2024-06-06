import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RiderTitle } from "../rider/RiderTitle";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="destinationAddress" source="destinationAddress" />
        <NumberInput label="distance" source="distance" />
        <NumberInput label="estimatedTime" source="estimatedTime" />
        <ReferenceInput source="rider.id" reference="Rider" label="Rider">
          <SelectInput optionText={RiderTitle} />
        </ReferenceInput>
        <TextInput label="sourceAddress" source="sourceAddress" />
      </SimpleForm>
    </Edit>
  );
};
