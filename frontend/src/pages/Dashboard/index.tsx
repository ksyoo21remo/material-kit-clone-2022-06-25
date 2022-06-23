import React from "react";
import { Box } from "@mui/material";
import DashboardLayout from "./DashboardLayout";
import SettingsButton from "./settings/SettingsButton";
import Admin from "./Admin";
import Exercise from "./Exercise";
import Expert from "./Expert";
import Member from "./Member";
import { Outlet } from "react-router-dom";

function View() {
  return (
    <>
      <SettingsButton />
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Outlet />
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
}

const Dashboard = {
  View,
  Admin,
  Exercise,
  Expert,
  Member,
};

export default Dashboard;
