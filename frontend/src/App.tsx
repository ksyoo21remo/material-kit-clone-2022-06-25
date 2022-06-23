import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import { paths } from "./paths";

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
