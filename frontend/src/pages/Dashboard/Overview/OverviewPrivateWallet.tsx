import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "../../../components/Chart";
import { ArrowRight as ArrowRightIcon } from "../../../icons/ArrowRight";
import { ChevronDown as ChevronDownIcon } from "../../../icons/ChevronDown";

export default function OverviewPrivateWallet() {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: [theme.palette.secondary.light],
    fill: {
      opacity: 1,
    },
    labels: [],
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        hollow: {
          size: "40%",
        },
        track: {
          background: theme.palette.secondary.dark,
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  const chartSeries = [76];

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <Box
        sx={{
          alignItems: {
            sm: "center",
          },
          display: "flex",
          flexWrap: "wrap",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Chart
          height={160}
          options={chartOptions}
          series={chartSeries}
          type="radialBar"
          width={160}
        />
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            pt: {
              sm: 3,
            },
            pb: 3,
            pr: 4,
            pl: {
              xs: 4,
              sm: 0,
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              mr: 3,
            }}
          >
            <Typography color="secondary" variant="h4">
              $21,500.00
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ mt: 1 }}
              variant="body2"
            >
              Your private wallet
            </Typography>
          </Box>
          <Avatar
            sx={{
              backgroundColor: alpha(theme.palette.error.main, 0.08),
              color: "error.main",
            }}
            variant="rounded"
          >
            <ChevronDownIcon fontSize="small" />
          </Avatar>
        </Box>
      </Box>
      <Divider />
      <CardActions>
        <Button endIcon={<ArrowRightIcon fontSize="small" />}>
          Withdraw money
        </Button>
      </CardActions>
    </Card>
  );
}
