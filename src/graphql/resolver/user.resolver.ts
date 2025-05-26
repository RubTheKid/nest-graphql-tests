import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "../inputs/create-user.input";
import { UserObject } from "../objects/user.object";
import { CreateUserResponse } from "../objects/create-user-response.object";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from "../inputs/update-user.input";

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

    @Mutation(() => UserObject, { name: 'updateUser' })
    async updateUser(
        @Args('id', { type: () => ID }) id: string,
        @Args('data', { type: () => UpdateUserInput }) data: UpdateUserInput
    ): Promise<UserObject> {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error('User not found');
        }

        user.name = data.name;
        user.email = data.email

        return user
    }

    @Mutation(() => Boolean, { name: 'deleteUser' })
    async deleteUser(
        @Args('id', { type: () => String }) id: string
    ): Promise<boolean> {
        const user = this.users.find(u => u.id === id && !u.deleted);
        if (!user) {
            throw new Error('User not found');
        }

        user.deleted = true;
        return true;
    }
}