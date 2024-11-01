import { Routes, Route } from "react-router-dom";
import Login from "../pages/(unauth)/Login/Login";
import { ProtectedRoute } from "./PrivateRoute";
import Unauthorized from "../pages/(error)/Unauthorized";
import NotFound from "../pages/(error)/NotFound";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <ProtectedRoute
        path="/home"
        allowedRoles={["admin"]}
        element={<div>teste</div>}
      />
      <Route path="/home" element={<div>Home</div>} />
      <Route path="/acess-denied" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
