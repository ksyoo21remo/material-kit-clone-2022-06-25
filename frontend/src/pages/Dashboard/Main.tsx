import React from "react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import GuestGuard from "./GuestGuard";

export default function Main() {
  return (
    <>
      <GuestGuard>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </GuestGuard>
    </>
  );
}
