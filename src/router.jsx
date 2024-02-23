import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import IdentityLayouts from "./layouts/identityLayouts";
import { registerAction } from "./components/identityForms/register";
import { loginAction } from "./components/identityForms/login";

const router = createBrowserRouter([
  {
    element: <IdentityLayouts />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
      // {
      //   path: "/",
      //   element: <Login />,
      //   action: loginAction,
      // },
    ],
  },
]);

export default router;
