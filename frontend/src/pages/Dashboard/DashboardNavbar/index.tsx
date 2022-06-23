import React, { PropsWithChildren } from "react";
import type { AppBarProps } from "@mui/material";
import {
  AppBar,
  Box,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import AccountButton from "./AccountButton";
import { Menu as MenuIcon } from "../../../icons/menu";

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

interface DashboardNavbarProps extends AppBarProps {
  onOpenSidebar?: () => void;
}

function DashboardNavbar(
  props: PropsWithChildren<DashboardNavbarProps>,
) {
  const { onOpenSidebar, ...other } = props;

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
        {...other}
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
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
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
