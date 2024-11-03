import { Routes, Route } from "react-router-dom";
import Login from "../pages/(unauth)/Login/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "../pages/(error)/NotFound";
import AccessDenied from "../pages/(error)/AccessDenied";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <div>dashboard</div>
          </ProtectedRoute>
        }
      />
      <Route path="/home" element={<div>Home</div>} />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
