import { GenderEnum } from ".";

export interface CreateUserInput {
    username:string,
    fullname:string,
    phone:number,
    email?:string,
    gender?:GenderEnum,
    birthday?:string,
}