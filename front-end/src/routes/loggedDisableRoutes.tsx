import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";
import Login from "../pages/(unauth)/Login";
import Register from "../pages/(unauth)/Register";

export const ProtectedLogin = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return <Login />;
};

export const ProtectedRegister = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redireciona para a página inicial se o usuário já estiver logado
    }
  }, [user, navigate]);

  return <Register />;
};
