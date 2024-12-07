import RegisterAppointment from "../pages/(auth)/RegisterAppointment";
import Home from "../pages/(unauth)/Home";
import ShowAppointments from "../pages/(unauth)/ShowAppointments";
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
    path: "/cadastrar-agendamento",
    element: (
      <ProtectedRoute allowedRoles={["admin", "user"]}>
        <RegisterAppointment />
      </ProtectedRoute>
    ),
  },
  {
    path: "/todos-agendamentos",
    element: (
      <ProtectedRoute allowedRoles={["admin", "user"]}>
        <ShowAppointments />,
      </ProtectedRoute>
    ),
  },
];
