import { FormEvent, useContext, useEffect, useState } from "react";
import classes from "./loginPage.module.scss";
import useLogin, { IErrorResponse } from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../stores/session.context";
export default function LoginPage() {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [qrUrl,setQrUrl] = useState<string>("")
    const [errRegisMessage,setErrRegisMessage] = useState<string | null>("")
    const {setIsLoggedIn} = useContext(SessionContext)
    const {onLogin,onQrUrl} = useLogin()
    const navigate = useNavigate()
    const onSubmitHandler = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const payload = {
        username: username,
        password: password,
      }
      setUsername("")
      setPassword("")
      const result = await onLogin(payload)
      if((!result?.success)){
        setErrRegisMessage((result as IErrorResponse).error)
        return
      }
      setErrRegisMessage("success login!")
      setIsLoggedIn(true)
      console.log(result.data.user)
      navigate('/homepage')
    }
    const onFetchQR = async () => {
      const result = await onQrUrl()
      if(result.error){
        console.log(result.error,":QR ERROR")
        return
      }
      console.log(result.data,":qr url")
      setQrUrl(result.data)
    }
    useEffect(()=>{
      onFetchQR()
    },[])
  return (
    <>
      <div className={classes.box}>
        <div className={classes.header}>Login Page</div>
      <div className={classes.wrap}>
         <form onSubmit={onSubmitHandler}>
              <div className={classes.form}>
                <label>Username</label>
                <input value={username} type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
              </div>
              <div className={classes.form}>
                <label >Password</label>
                <input value={password} type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
              </div>
              <button type="submit" className={classes.form}>Login</button>
         </form>
         <form className={classes.qr}>
          <div>QR CODE</div>
          <img src={qrUrl}/>
         </form>
      </div>
       <div className={classes.status}>STATUS:{errRegisMessage}</div>
      </div>
    </>
  );
}
