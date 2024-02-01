import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PdfScan from "../components/PdfScan/PdfScan";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/pdfScan",
        element: <PdfScan />
      }
    ],
  },
]);
export default router;
