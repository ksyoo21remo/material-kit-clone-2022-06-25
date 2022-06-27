import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { User as UserIcon } from "../../../icons/User";
import { ArrowRight as ArrowRightIcon } from "../../../icons/ArrowRight";

export default function OverviewContacts() {
  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <UserIcon color="primary" />
          <Typography
            color="primary.main"
            sx={{ pl: 1 }}
            variant="subtitle2"
          >
            Contacts
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }} variant="h6">
          Contacts allow you to manage your company contracts
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="outlined"
        >
          My Contacts
        </Button>
      </CardActions>
    </Card>
  );
}
