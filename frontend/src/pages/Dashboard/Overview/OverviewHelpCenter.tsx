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
import { ExternalLink as ExternalLinkIcon } from "../../../icons/ExternalLink";
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../../icons/InformationCircleOutlined";

export default function OverviewHelpCenter() {
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
          <InformationCircleOutlinedIcon color="primary" />
          <Typography
            color="primary.main"
            sx={{ pl: 1 }}
            variant="subtitle2"
          >
            Help Center
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }} variant="h6">
          Need help figuring things out?
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
          endIcon={<ExternalLinkIcon fontSize="small" />}
          size="small"
        >
          Help Center
        </Button>
      </CardActions>
    </Card>
  );
}
