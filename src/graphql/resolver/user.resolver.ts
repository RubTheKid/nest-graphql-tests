import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "../inputs/create-user.input";
import { UserObject } from "../objects/user.object";
import { CreateUserResponse } from "../objects/create-user-response.object";
import { v4 as uuidv4 } from 'uuid';

@Resolver(() => UserObject)
export class UserResolver {
    // In-memory storage for users
    private users: UserObject[] = [];

    @Query(() => [UserObject], { name: 'users' })
    async getUsers(): Promise<UserObject[]> {
        return this.users;
    }

    @Mutation(() => CreateUserResponse, { name: 'createUser' })
    async createUser(
        @Args('data', { type: () => CreateUserInput }) data: CreateUserInput
    ): Promise<CreateUserResponse> {
        console.log('Creating user:', data);
        const user = new UserObject();
        user.id = uuidv4();
        user.name = data.name;
        user.email = data.email;

        this.users.push(user);

        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    }
}