import {
  Box,
  Chip,
  Container,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { platformIcons } from "./platformIcons";

export default function AuthBanner() {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        py: 1,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Chip
            color="primary"
            label="NEW"
            sx={{ mr: 2 }}
            size="small"
          />
          <Typography variant="subtitle2">Visit our </Typography>
          <RouterLink to=".">
            <Typography variant="subtitle2">docs</Typography>
          </RouterLink>{" "}
          <Typography variant="subtitle2">
            and find out how to switch between
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              "& img": {
                height: 30,
                m: 1,
              },
            }}
          >
            <Tooltip title="Amplify">
              <img alt="Amplify" src={platformIcons.Amplify} />
            </Tooltip>
            <Tooltip title="Auth0">
              <img alt="Auth0" src={platformIcons.Auth0} />
            </Tooltip>
            <Tooltip title="Firebase">
              <img alt="Firebase" src={platformIcons.Firebase} />
            </Tooltip>
            <Tooltip title="JSON Web Token">
              <img alt="JWT" src={platformIcons.JWT} />
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
