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
import { Download as DownloadIcon } from "../../../icons/Download";

export default function OverviewDownload() {
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
          <DownloadIcon color="primary" />
          <Typography
            color="primary.main"
            sx={{ pl: 1 }}
            variant="subtitle2"
          >
            Download
          </Typography>
        </Box>
        <Typography sx={{ mt: 2 }} variant="h6">
          Download our Free PDF and learn how to get more job leads
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
          endIcon={<DownloadIcon fontSize="small" />}
          size="small"
          variant="outlined"
        >
          Download Free PDF
        </Button>
      </CardActions>
    </Card>
  );
}
