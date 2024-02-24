import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Dashboard1 = lazy(() => import("./dashboard1/Dashboard1"));
const Dashboard2 = lazy(() => import("./dashboard1/Socialmedia"));
const Dashboard3 = lazy(() => import("./dashboard1/DashChart"));

const dashboardRoutes = [
  {
    path: "/dashboard/v1",
    element: <Dashboard1 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v2",
    element: <Dashboard2 />,
    // auth: authRoles.admin,
  },
  {
    path: "/dashboard/v3",
    element: <Dashboard3 />,
    // auth: authRoles.admin,
  },
];

export default dashboardRoutes;
