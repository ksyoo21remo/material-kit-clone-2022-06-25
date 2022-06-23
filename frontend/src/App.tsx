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
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.signIn} element={<Authentication.SignIn />} />
        <Route path={paths.signUp} element={<Authentication.SignUp />} />
        <Route path={paths.dashboard.root} element={<Dashboard.View />}>
          <Route index element={<Navigate to={paths.dashboard.admin.super} replace={true} />} />
          <Route path={paths.dashboard.admin.super} element={<Dashboard.Admin.SuperAdmin />} />
          <Route path={paths.dashboard.admin.center} element={<Dashboard.Admin.CenterAdmin />} />
          <Route path={paths.dashboard.exercise.each} element={<Dashboard.Exercise.Each />} />
          <Route path={paths.dashboard.exercise.class} element={<Dashboard.Exercise.Class />} />
          <Route path={paths.dashboard.expert.all} element={<Dashboard.Expert.All />} />
          <Route path={paths.dashboard.member.all} element={<Dashboard.Member.All />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace={true} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
