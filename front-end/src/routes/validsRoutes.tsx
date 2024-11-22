import Home from "../pages/(unauth)/Home";
import Login from "../pages/(unauth)/Login";
import Register from "../pages/(unauth)/Register";

export const validsRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
