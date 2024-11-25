import Home from "../pages/(unauth)/Home";
import { ProtectedLogin, ProtectedRegister } from "./loggedDisableRoutes";

export const validsRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <ProtectedRegister />,
  },
  {
    path: "/login",
    element: <ProtectedLogin />,
  },
];
