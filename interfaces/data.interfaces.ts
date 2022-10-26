export interface User {
    id: string;
    fullname: string;
    phone: number;
    email:string;
    birthday: string;
    gender: string;
    department:string,
  }

export interface RestAPI {
  data: User[],
  status:number,
}