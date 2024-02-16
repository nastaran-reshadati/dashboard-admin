import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import IdentityLayouts from "./layouts/identityLayouts";
import { registerAction } from "./components/identityForms/register";

const router = createBrowserRouter([
  {
    element: <IdentityLayouts />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default router;
