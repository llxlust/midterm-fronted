import { useContext, useEffect } from "react";
import useSession from "../hooks/useSession/useSession";
import { SessionContext } from "../stores/session.context";
import { Outlet, useNavigate } from "react-router-dom";

export default function PublicLayout() {
  const { user, isLoggedIn } = useContext(SessionContext);
  const { loginByToken } = useSession();
  const navigate = useNavigate();
  const tokenLogin = async () => {
    const result = await loginByToken()
    return result
  }
  useEffect(() => {
   if(!user){
    const result = tokenLogin()
    result.then((result)=>
    {
        if(!result.success){
            console.log(result.error)
            navigate("/")
        }
    })
   }
  }, []);
  if(!isLoggedIn&&!user){
    navigate("/")
  }

  return (
    <>
      <div>Nav bar</div>
      <Outlet />
    </>
  );
}
