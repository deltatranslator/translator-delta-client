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
import AdminInbox from "../Pages/DashboardPages/AdminInbox/AdminInbox";
import InboxDetailsPage from "../Pages/DashboardPages/AdminInbox/InboxDetailsPage";
import { getInbox } from "../Api/inbox";
import AdminUserStats from "../Pages/DashboardPages/AdminPages/AdminUserStats/AdminUserStats";

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
        element: <PdfScan />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin-dashboard",
        element: <AdminAllUsers />,
      },
      {
        path: "/admin-dashboard/user-feedback",
        element: <AdminUserFeedback />,
      },
      {
        path: "/admin-dashboard/inbox",
        element: (
          <PrivateRoute>
            <AdminInbox />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-dashboard/inboxDetails/:id",
        element: (
          <PrivateRoute>
            <InboxDetailsPage></InboxDetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) => getInbox(params.id),
      },
      {
        path: "/admin-dashboard/statistics",
        element: <AdminUserStats />,
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user-dashboard",
        element: <UserProfile />,
      },
    ],
  },
]);
export default router;
