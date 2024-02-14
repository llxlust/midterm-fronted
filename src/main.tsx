
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/login";
import Provider from "./stores/providers";
import PublicLayout from "./layouts/public.layout";
import HomePage from "./pages/homepage/homePage";
import QR from "./pages/qrcode/qrcode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/qrcode",
    element: <QR/>
  },
  {
    path:"/homepage",
    element: <PublicLayout/>,
    children:[
      {
        path:"/homepage",
        element:<HomePage/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  //</React.StrictMode>
);
