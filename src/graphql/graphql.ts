
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    email: string;
    name: string;
}

export class UpdateUserInput {
    email: string;
    name: string;
}

export class CreateUserResponse {
    email: string;
    id: string;
    name: string;
}

export abstract class IMutation {
    abstract createUser(data: CreateUserInput): CreateUserResponse | Promise<CreateUserResponse>;

    abstract deleteUser(id: string): boolean | Promise<boolean>;

    abstract updateUser(data: UpdateUserInput, id: string): UserObject | Promise<UserObject>;
}

export abstract class IQuery {
    abstract users(): UserObject[] | Promise<UserObject[]>;
}

export class UserObject {
    deleted: boolean;
    email: string;
    id: string;
    name: string;
}

type Nullable<T> = T | null;
