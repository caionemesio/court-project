import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { IProtectedRouteProps } from "../types/IAuth";

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: IProtectedRouteProps) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (user === null) {
    return <div>Carregando...</div>;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/acesso-negado" replace />;
  }

  return children;
};
