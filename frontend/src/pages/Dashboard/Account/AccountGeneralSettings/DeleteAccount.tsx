import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function DeleteAccount() {
  return (
    <Card
      sx={{
        mt: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Typography variant="h6">Delete Account</Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            <Typography sx={{ mb: 3 }} variant="subtitle1">
              Delete your account and all of your source data. This is
              irreversible.
            </Typography>
            <Button color="error" variant="outlined">
              Delete account
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
