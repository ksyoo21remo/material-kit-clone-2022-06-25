import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { paths } from "./paths";

function App() {
  // prettier-ignore
  return (
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
  );
}

export default App;
