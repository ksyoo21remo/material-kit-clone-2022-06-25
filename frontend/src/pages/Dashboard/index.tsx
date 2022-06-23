import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import DashboardLayout from "./DashboardLayout";

function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ mb: 4 }}>
              <Grid
                container
                justifyContent="space-between"
                spacing={3}
              >
                <Grid item>
                  <Typography variant="h4">
                    대시보드 메인 페이지
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    m: -1,
                  }}
                ></Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
