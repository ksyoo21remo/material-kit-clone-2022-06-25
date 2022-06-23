import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { SettingsContext } from "./contexts/settings-context";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import { paths } from "./paths";
import { createTheme } from "./theme";

function App() {
  const { settings } = useContext(SettingsContext);

  return (
    <ThemeProvider
      theme={createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        mode: settings.theme,
      })}
    >
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route
          path={paths.signIn}
          element={<Authentication.SignIn />}
        />
        <Route
          path={paths.signUp}
          element={<Authentication.SignUp />}
        />
        <Route path={paths.dashboard} element={<Dashboard />} />
        <Route
          path="*"
          element={<Navigate to={"/"} replace={true} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
