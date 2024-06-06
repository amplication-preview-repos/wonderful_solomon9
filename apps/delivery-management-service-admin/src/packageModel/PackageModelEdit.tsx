import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DeliveryRequestTitle } from "../deliveryRequest/DeliveryRequestTitle";

export const PackageModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
