import { ThemeProvider } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useSettings } from "./hooks/useSettings";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { paths } from "./paths";
import { createTheme } from "./theme";

function App() {
  const { settings } = useSettings();

  // prettier-ignore
  return (
    <ThemeProvider
      theme={createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        mode: settings.theme,
      })}
    >
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path={paths.authentication.root} element={<Authentication.Main />}>
            <Route index element={<Navigate to={paths.authentication.signIn} replace={true} />} />
            <Route path={paths.authentication.signIn} element={<Authentication.SignIn />} />
            <Route path={paths.authentication.signUp} element={<Authentication.SignUp />} />
          </Route>
          <Route path={paths.dashboard.root} element={<Dashboard.Main />}>
            <Route index element={<Navigate to={paths.dashboard.overview} replace={true} />} />
            <Route path={paths.dashboard.overview} element={<Dashboard.Overview />} />
          </Route>
          <Route path="*" element={<Error.NotFound />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
