import { Outlet, useLocation } from "react-router-dom";
import PageWrapper from "../components/containers/PageWrapper";

const Layout = () => {
  const location = useLocation();
  const noLayoutRoutes = ["/access-denied", "*"];

  const isNotFoundRoute = location.pathname === "/not-found";
  const shouldRenderLayout =
    !noLayoutRoutes.includes(location.pathname) && !isNotFoundRoute;

  return shouldRenderLayout ? (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  ) : (
    <Outlet />
  );
};

export default Layout;
