import { useNavigate } from "react-router-dom";
import LogoUninassau from "../../../assets/images/logo_uninassau.svg";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthContext();

  const routes = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Agendamentos",
      path: "/cadastrar-agendamento",
    },
  ];
  if (user) {
    routes.push({
      title: "Meus Agendamentos",
      path: "/meus-agendamentos",
    });
  } else {
    routes.push({
      title: "Login",
      path: "/login",
    });
  }
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="static"
        className="bg-gray-50 flex-row items-center justify-between px-8 py-2  "
        sx={{
          boxShadow: "none",
        }}
      >
        <IconButton edge="start" aria-label="menu">
          <Box
            component="img"
            src={LogoUninassau}
            width={100}
            height={70}
            alt="Logo Uninassau"
          />
        </IconButton>
        <Box className="flex gap-8">
          {routes.map((route) => (
            <Typography
              key={route.path}
              onClick={() => navigate(route.path)}
              className="cursor-pointer text-blue-900"
            >
              {route.title}
            </Typography>
          ))}
        </Box>
      </AppBar>
      {children}
    </>
  );
}
