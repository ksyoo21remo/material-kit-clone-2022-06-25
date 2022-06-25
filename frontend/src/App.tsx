import React from "react";
import { Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { paths } from "./paths";

function App() {
  // prettier-ignore
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={paths.authentication} element={<Authentication />} />
      <Route path={paths.dashboard} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
