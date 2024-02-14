import { useContext } from "react";
import { SessionContext } from "../../stores/session.context";
import axios, { AxiosError } from "axios";
import { IErrorResponse } from "../../pages/loginPage/hooks/useLogin";

export default function useSession() {
  const { setIsLoggedIn, setUser } = useContext(SessionContext);

  const loginByToken = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3100/api/auth/token-login",
        {},
        { withCredentials: true }
      );
      const userData = result.data.data;
      setUser(userData);
      setIsLoggedIn(true);
      return result.data
    } catch (error) {
        const err = error as AxiosError<IErrorResponse>
        return err.response?.data
    }
  };
  return { loginByToken };
}
