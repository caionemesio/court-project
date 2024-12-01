import RegisterAppointment from "../pages/(auth)/RegisterAppointment";
import Home from "../pages/(unauth)/Home";
import { ProtectedLogin, ProtectedRegister } from "./loggedDisableRoutes";
import { ProtectedRoute } from "./ProtectedRoute";

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
  {
    path: "/fazer-agendamento",
    element: (
      <ProtectedRoute allowedRoles={["admin", "user"]}>
        <RegisterAppointment />
      </ProtectedRoute>
    ),
  },
];
