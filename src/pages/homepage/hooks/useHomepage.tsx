import { useContext } from "react"
import { SessionContext } from "../../../stores/session.context"
import axios from "axios"

export default function  useHomepage(){
    const {setIsLoggedIn,setUser} = useContext(SessionContext)
    const logout = async () => {
        setIsLoggedIn(false)
        setUser(null)
        const result = await axios.post("http://localhost:3100/api/auth/logout",{},{withCredentials:true})
        console.log(result.data,":data")
    }
    return {logout}
}