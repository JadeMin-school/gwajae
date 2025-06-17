import type { User } from "./User.d.ts";



export type HandleDelete = (user: User) => void;
export type HandleAddUser = (newUser: User) => void;