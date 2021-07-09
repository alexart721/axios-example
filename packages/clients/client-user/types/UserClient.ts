import { AxiosInstance } from 'axios';
import { User } from './Body';

export type UserClient = {
  readonly requester: AxiosInstance
}

export type UserClientOptions = {};

export type GetUserResponse = User;
export type CreateUserResponse = User;
export type UpdateUserResponse = User;
export type DeleteUserResponse = { id: string };
