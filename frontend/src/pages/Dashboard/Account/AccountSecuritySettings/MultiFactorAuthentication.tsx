import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { ArrowRight as ArrowRightIcon } from "../../../../icons/ArrowRight";

export default function MultiFactorAuthentication() {
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
        <Typography variant="h6">
          Multi Factor Authentication
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "neutral.900"
                      : "neutral.100",
                }}
                variant="outlined"
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "block",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        "&::before": {
                          backgroundColor: "error.main",
                          borderRadius: "50%",
                          content: '""',
                          display: "block",
                          height: 8,
                          left: 4,
                          position: "absolute",
                          top: 7,
                          width: 8,
                          zIndex: 1,
                        },
                      }}
                    >
                      <Typography
                        color="error"
                        sx={{ ml: 3 }}
                        variant="body2"
                      >
                        Off
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ mt: 1 }} variant="subtitle2">
                    Authenticator App
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Use an authenticator app to generate one time
                    security codes.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      endIcon={<ArrowRightIcon fontSize="small" />}
                      variant="outlined"
                    >
                      Set Up
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "neutral.900"
                      : "neutral.100",
                }}
                variant="outlined"
              >
                <CardContent>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        "&::before": {
                          backgroundColor: "error.main",
                          borderRadius: "50%",
                          content: '""',
                          display: "block",
                          height: 8,
                          left: 4,
                          position: "absolute",
                          top: 7,
                          width: 8,
                          zIndex: 1,
                        },
                      }}
                    >
                      <Typography
                        color="error"
                        sx={{ ml: 3 }}
                        variant="body2"
                      >
                        Off
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ mt: 1 }} variant="subtitle2">
                    Text Message
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Use your mobile phone to receive security codes
                    via SMS.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      endIcon={<ArrowRightIcon fontSize="small" />}
                      variant="outlined"
                    >
                      Set Up
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
