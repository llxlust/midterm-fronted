import { useContext } from "react"
import { SessionContext } from "../../stores/session.context"
import useHomepage from "./hooks/useHomepage"

export default function HomePage(){
    const {user} = useContext(SessionContext)
    const {logout} = useHomepage()
    return<>
        <div>Homepage</div>
    {user && <div>user:{user.username}</div>}
    <button onClick={()=>logout()}>Log out</button>
    </>
}