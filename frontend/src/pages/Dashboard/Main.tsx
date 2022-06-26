import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";

export default function Main() {
  // eslint-disable-next-line
  const [displayBanner, setDisplayBanner] = useState<boolean>(true);

  useEffect(() => {
    // Restore the persistent state from local/session storage
    const value = window.sessionStorage.getItem("dismiss-banner");
    if (value === "true") {
      setDisplayBanner(false);
    }
  }, []);

  // eslint-disable-next-line
  const handleDismissBanner = () => {
    // Update the persistent state
    // globalThis.sessionStorage.setItem('dismiss-banner', 'true');
    setDisplayBanner(false);
  };

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
            <Box sx={{ mb: 4 }}></Box>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  );
}
