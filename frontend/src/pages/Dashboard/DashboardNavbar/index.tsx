import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import { Menu as MenuIcon } from "../../../icons/menu";
import AccountButton from "./AccountButton";

// prettier-ignore
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === "light"
    ? {
      boxShadow: theme.shadows[3],
    }
    : {
      backgroundColor: theme.palette.background.paper,
      borderBottomColor: theme.palette.divider,
      borderBottomStyle: "solid",
      borderBottomWidth: 1,
      boxShadow: "none",
    }),
}));

function DashboardNavbar() {
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={() => {}}
            sx={{ display: { xs: "inline-flex", lg: "none" } }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <AccountButton />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
}

export default DashboardNavbar;
