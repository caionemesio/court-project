import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { validsRoutes } from "./validsRoutes";
import NotFound from "../pages/(error)/NotFound";
import AccessDenied from "../pages/(error)/AccessDenied";

export default function RouterApp() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {validsRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/acesso-negado" element={<AccessDenied />} />
    </Routes>
  );
}
