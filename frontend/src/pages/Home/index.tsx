import {
  Box,
  Button,
  Container,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { paths } from "../../paths";

export default function Home() {
  return (
    <Container>
      <Box>
        <RouterLink to={paths.authentication.root}>
          <Link component={Button} underline="hover">
            <Typography variant="h4">Authentication</Typography>
          </Link>
        </RouterLink>
      </Box>
      <Box>
        <RouterLink to={paths.dashboard.root}>
          <Link component={Button} underline="hover">
            <Typography variant="h4">Dashboard</Typography>
          </Link>
        </RouterLink>
      </Box>
    </Container>
  );
}
