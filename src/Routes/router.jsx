import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PdfScan from "../components/PdfScan/PdfScan";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdminAllUsers from "../Pages/DashboardPages/AdminPages/AdminAllUsers/AdminAllUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminUserFeedback from "../Pages/DashboardPages/AdminPages/AdminUserFeedback/AdminUserFeedback";
import UserProfile from "../components/UserDashboard/UserProfile/UserProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <AdminAllUsers />
      },
      {
        path: '/dashboard/user-feedback',
        element: <AdminUserFeedback />
      },
      {
        path: '/dashboard/userProfile',
        element: <UserProfile />
      }
    ]
  }
]);
export default router;
