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
import { ArrowRight as ArrowRightIcon } from "../../../icons/ArrowRight";
import { Briefcase as BriefcaseIcon } from "../../../icons/Briefcase";

export default function OverviewJobs() {
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
          <BriefcaseIcon color="primary" fontSize="small" />
          <Typography
            color="primary.main"
            sx={{ pl: 1 }}
            variant="subtitle2"
          >
            Jobs
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Find your dream job
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
        >
          Search Jobs
        </Button>
      </CardActions>
    </Card>
  );
}
