import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

export default function PublicProfile() {
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
            <Typography variant="h6">Public profile</Typography>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Box>
                <Typography variant="subtitle1">
                  Make Contact Info Public
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  Means that anyone viewing your profile will be able
                  to see your contacts details.
                </Typography>
              </Box>
              <Switch />
            </Box>
            <Divider />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <Box>
                <Typography variant="subtitle1">
                  Available to hire
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  Toggling this will let your teammates know that you
                  are available for acquiring new projects.
                </Typography>
              </Box>
              <Switch defaultChecked />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
