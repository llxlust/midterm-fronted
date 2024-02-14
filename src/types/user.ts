export interface IUser{
    id:number;
    username:string;
    password:string;
    organize:string;
    role:string
    resetPasswordToken: string | null
    createAt:string
    resetPasswordExpire: string | null
    updateAt:string
}
