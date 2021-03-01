import { Ref } from "./ref";

interface UserData {
  name: string;
  dni: string;
  valid: string;
  routines: {
    [key: string]: string;
  };
}

export interface RawUser {
  ref: Ref;
  data: UserData;
}

export interface User extends UserData {
  id: string;
}
