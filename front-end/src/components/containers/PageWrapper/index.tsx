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
      path: "/",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="static"
        className="bg-transparent flex-row items-center justify-between p-4"
      >
        <IconButton edge="start" aria-label="menu">
          <Box component="img" src={LogoUninassau} alt="Logo Uninassau" />
        </IconButton>
        <Box className="flex gap-8">
          {routes.map((route) => (
            <Typography
              key={route.path}
              onClick={() => navigate(route.path)}
              className="cursor-pointer text-slate-950"
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
