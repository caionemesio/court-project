import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RouterApp from "./routes/RouterApp.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotifierProvider } from "./contexts/NotifierContext.tsx";
import GlobalNotifier from "./helpers/Notifier/index.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <NotifierProvider>
              <GlobalNotifier />
              <RouterApp />
            </NotifierProvider>
          </QueryClientProvider>
        </AuthProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </StrictMode>
);
