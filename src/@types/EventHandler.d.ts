import type { User } from "./User.d.ts";



export type DeleteHandler = (user: User) => void;
export type AddUserHandler = (newUser: User) => void;