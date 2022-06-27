import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import OverviewBanner from "./OverviewBanner";
import OverviewContacts from "./OverviewContacts";
import OverviewCryptoWallet from "./OverviewCryptoWallet";
import OverviewDownload from "./OverviewDownload";
import OverviewHelpCenter from "./OverviewHelpCenter";
import OverviewInbox from "./OverviewInbox";
import OverviewJobs from "./OverviewJobs";
import OverviewLatestTransactions from "./OverviewLatestTransactions";
import OverviewPrivateWallet from "./OverviewPrivateWallet";
import OverviewTotalBalance from "./OverviewTotalBalance";
import OverviewTotalTransactions from "./OverviewTotalTransactions";
import { Reports as ReportsIcon } from "../../../icons/Reports";

export default function Overview() {
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
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography variant="h4">Good Morning</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                m: -1,
              }}
            >
              <Button
                startIcon={<ReportsIcon fontSize="small" />}
                sx={{ m: 1 }}
                variant="outlined"
              >
                Reports
              </Button>
              <TextField
                defaultValue="week"
                label="Period"
                select
                size="small"
                sx={{ m: 1 }}
              >
                <MenuItem value="week">Last week</MenuItem>
                <MenuItem value="month">Last month</MenuItem>
                <MenuItem value="year">Last year</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={4}>
          {displayBanner && (
            <Grid item xs={12}>
              <OverviewBanner onDismiss={handleDismissBanner} />
            </Grid>
          )}
          <Grid item md={6} xs={12}>
            <OverviewCryptoWallet />
          </Grid>
          <Grid item md={6} xs={12}>
            <OverviewPrivateWallet />
          </Grid>
          <Grid item md={8} xs={12}>
            <OverviewTotalTransactions />
          </Grid>
          <Grid item md={4} xs={12}>
            <OverviewTotalBalance />
          </Grid>
          <Grid item md={8} xs={12}>
            <OverviewLatestTransactions />
          </Grid>
          <Grid item md={4} xs={12}>
            <OverviewInbox />
          </Grid>
          <Grid item md={6} xs={12}>
            <OverviewJobs />
          </Grid>
          <Grid item md={6} xs={12}>
            <OverviewHelpCenter />
          </Grid>
          <Grid item md={6} xs={12}>
            <OverviewDownload />
          </Grid>
          <Grid item md={6} xs={12}>
            <OverviewContacts />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
