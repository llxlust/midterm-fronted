import { IUser } from "./user"

export interface IRegisterResponese{
   
}

export interface IRegisterResulResponese{
    data:{
        user:IUser
        token:string
    }
    timestamp:string
}