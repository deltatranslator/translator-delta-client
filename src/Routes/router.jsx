import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout/MainLayout";
import Home from "../Pages/Home/Home";
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
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import OurTeam from "../components/OurTeam/OurTeam";

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
      {
        path: "/ourTeam",
        element: <OurTeam />,
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
        element: <AdminUserStats />,
      },
      {
        path: "admin-users",
        element: <AdminAllUsers />,
      },
      {
        path: "user-feedback",
        element: <AdminUserFeedback />,
      },
      {
        path: "inbox",
        element: (
          <PrivateRoute>
            <AdminInbox />
          </PrivateRoute>
        ),
      },
      {
        path: "inboxDetails/:id",
        element: (
          <PrivateRoute>
            <InboxDetailsPage></InboxDetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) => getInbox(params.id),
      },
      {
        path: "user-dashboard",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
