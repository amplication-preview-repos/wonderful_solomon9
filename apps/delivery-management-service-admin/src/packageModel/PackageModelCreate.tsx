import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DeliveryRequestTitle } from "../deliveryRequest/DeliveryRequestTitle";

export const PackageModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="contentDescription"
          multiline
          source="contentDescription"
        />
        <ReferenceInput
          source="deliveryRequest.id"
          reference="DeliveryRequest"
          label="DeliveryRequest"
        >
          <SelectInput optionText={DeliveryRequestTitle} />
        </ReferenceInput>
        <div />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
