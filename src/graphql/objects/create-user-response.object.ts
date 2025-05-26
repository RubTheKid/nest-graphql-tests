import { Field, ObjectType, ID } from "@nestjs/graphql";

@ObjectType()
export class CreateUserResponse {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;
} 