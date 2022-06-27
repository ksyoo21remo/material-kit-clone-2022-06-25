import React from "react";
import { Outlet } from "react-router-dom";
import AuthGuard from "./AuthGuard";

export default function Main() {
  return (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  );
}
