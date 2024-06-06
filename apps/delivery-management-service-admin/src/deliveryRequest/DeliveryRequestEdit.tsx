import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { PackageModelTitle } from "../packageModel/PackageModelTitle";

export const DeliveryRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <SelectInput
          source="deliveryStatus"
          label="deliveryStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="destinationAddress" source="destinationAddress" />
        <ReferenceArrayInput
          source="packages"
          reference="PackageModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PackageModelTitle} />
        </ReferenceArrayInput>
        <TextInput label="receiver" source="receiver" />
        <DateTimeInput label="requestedOn" source="requestedOn" />
        <TextInput label="sender" source="sender" />
        <TextInput label="sourceAddress" source="sourceAddress" />
      </SimpleForm>
    </Edit>
  );
};
