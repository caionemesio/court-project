import { useNavigate } from "react-router-dom";
import LogoUninassau from "../../../assets/images/logo_uninassau.svg";
import { AppBar, Box, IconButton, Typography } from "@mui/material";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = [
    {
      title: "Agendamentos",
      path: "/agendamentos",
    },
    {
      title: "Horários",
      path: "/horarios",
    },
    {
      title: "user",
      path: "/home",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" className="bg-transparent">
        <IconButton edge="start" aria-label="menu">
          <Box component="img" src={LogoUninassau} alt="Logo Uninassau" />
        </IconButton>
        <Box className="flex justify-end">
          {routes.map((route) => (
            <Typography
              key={route.path}
              onClick={() => navigate(route.path)}
              className="cursor-pointer"
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
