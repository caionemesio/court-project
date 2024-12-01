import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";
import Login from "../pages/(unauth)/Login";
import Register from "../pages/(unauth)/Register";

export const ProtectedLogin = () => {
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user && location.pathname === "/login") {
      navigate("/");
    }
  }, [user, navigate, location.pathname]);

  return <Login />;
};

export const ProtectedRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user && location.pathname === "/cadastro") {
      navigate("/");
    }
  }, [user, navigate, location.pathname]);

  return <Register />;
};
