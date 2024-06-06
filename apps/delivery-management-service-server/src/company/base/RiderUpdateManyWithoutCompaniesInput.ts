/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RiderWhereUniqueInput } from "../../rider/base/RiderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RiderUpdateManyWithoutCompaniesInput {
  @Field(() => [RiderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RiderWhereUniqueInput],
  })
  connect?: Array<RiderWhereUniqueInput>;

  @Field(() => [RiderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RiderWhereUniqueInput],
  })
  disconnect?: Array<RiderWhereUniqueInput>;

  @Field(() => [RiderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RiderWhereUniqueInput],
  })
  set?: Array<RiderWhereUniqueInput>;
}

export { RiderUpdateManyWithoutCompaniesInput as RiderUpdateManyWithoutCompaniesInput };
