
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

export class CreateUserResponse {
    email: string;
    id: string;
    name: string;
}

export abstract class IMutation {
    abstract createUser(data: CreateUserInput): CreateUserResponse | Promise<CreateUserResponse>;
}

export abstract class IQuery {
    abstract users(): UserObject[] | Promise<UserObject[]>;
}

export class UserObject {
    email: string;
    id: string;
    name: string;
}

type Nullable<T> = T | null;
