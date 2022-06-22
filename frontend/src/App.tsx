import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Container>
      <Typography variant={"h2"}>Espotec Admin Page</Typography>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={<Navigate to={"/"} replace={true} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
