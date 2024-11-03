import { Routes, Route } from "react-router-dom";
import Login from "../pages/(unauth)/Login/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "../pages/(error)/NotFound";
import AccessDenied from "../pages/(error)/AccessDenied";
import Home from "../pages/(unauth)/Home";
import Layout from "./Layout";

export default function RouterApp() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <div>dashboard</div>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
