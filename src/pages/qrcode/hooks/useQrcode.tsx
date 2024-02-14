import axios, { AxiosError } from "axios"
import { IErrorResponse } from "../../loginPage/hooks/useLogin"

export default function useQrcode(){
    const sentToken = async (token:string) => {
        try{
            const result = await axios.post('http://localhost:3100/api/auth/qr-login',{token:token},{withCredentials:true})
            return result.data
        }catch(error){
            const err = error as AxiosError<IErrorResponse>
            return err.response?.data
        }
    }
    return {sentToken}
}