import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { IProtectedRouteProps } from "../types/IAuth";

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: IProtectedRouteProps) => {
  const authContext = useAuth();
  const user = authContext?.user;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
};
