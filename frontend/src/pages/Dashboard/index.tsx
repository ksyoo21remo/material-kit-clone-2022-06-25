import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DashboardLayout from "./DashboardLayout";
import SettingsButton from "./settings/SettingsButton";

function Dashboard() {
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
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4">
                  대시보드 메인 페이지 1
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  대시보드 메인 페이지 2
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  대시보드 메인 페이지 3
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
