import { Outlet, useLocation } from "react-router-dom";
import PageWrapper from "../components/containers/PageWrapper";
import { validsRoutes } from "./validsRoutes";

const Layout = () => {
  const location = useLocation();

  const layoutRoutes = validsRoutes.map((route) => route.path);

  const shouldRenderLayout = layoutRoutes.includes(location.pathname);

  return shouldRenderLayout ? (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  ) : (
    <Outlet />
  );
};

export default Layout;
