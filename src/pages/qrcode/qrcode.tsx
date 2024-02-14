import { useState } from "react";
import useQrcode from "./hooks/useQrcode";
import { useNavigate } from "react-router-dom";

export default function QR() {
  const [token, setToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { sentToken } = useQrcode();
  const navigate = useNavigate()
  const onSubmitHandler = () => {
    const result = sentToken(token);
    setToken("");
    result.then((value) => {
      if(value.error){
        setErrorMessage(value.error);
        console.log(value);
        return
      }
      console.log(value.data,":user data")
      navigate("/homepage")
    });
  };
  return (
    <>
      <div>
        <h1>QR CODE AUTH</h1>
        <label>Token from mobile</label>
        <input value={token} onChange={(e) => setToken(e.target.value)}></input>
        <button onClick={() => onSubmitHandler()}>send token</button>
        <h1>Status:{errorMessage}</h1>
      </div>
    </>
  );
}
