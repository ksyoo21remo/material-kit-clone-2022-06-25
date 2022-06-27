import { ThemeProvider } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSettings } from "./hooks/useSettings";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
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
      <Routes>
        <Route index element={<Home />} />
        <Route path={paths.authentication.root}>
          <Route index element={<Navigate to={paths.authentication.signIn} replace={true} />} />
          <Route path={paths.authentication.signIn} element={<Authentication.SignIn />} />
          <Route path={paths.authentication.signUp} element={<Authentication.SignUp />} />
        </Route>
        <Route path={paths.dashboard.root}>
          <Route index element={<Navigate to={paths.dashboard.main} replace={true} />} />
          <Route path={paths.dashboard.main} element={<Dashboard.Main />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

// * CUM2 64HX UGN3
