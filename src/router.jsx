import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import IdentityLayouts from "./layouts/identityLayouts";
import { registerAction } from "./components/identityForms/register";
import { loginAction } from "./components/identityForms/login";
import Courses, { cousesLoader } from "./pages/Courses";
import MainLayout from "./layouts/mainLayout/main-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: cousesLoader,
      },
    ],
  },
  {
    element: <IdentityLayouts />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
