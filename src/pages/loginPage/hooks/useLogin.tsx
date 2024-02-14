import axios, { AxiosError } from "axios";
export interface IErrorResponse {
  error: string;
  success: boolean;
  timestamp: number;
}
export default function useLogin() {
  const onLogin = async (payload: { username: string; password: string }) => {
    try {
      const res = await axios.post(
        "http://localhost:3100/api/auth/login",
        {
          payload,
        },
        {
          withCredentials: true,
        }
      );

      return res.data;
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>;

      return err.response?.data;
    }
  };
  const onQrUrl = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3100/api/auth/qr-generate",
        {},
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>;
      return err.response?.data;
    }
  };
  return { onLogin, onQrUrl };
}
