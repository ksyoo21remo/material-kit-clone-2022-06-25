import {
  AppBar,
  AppBarProps,
  Box,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import AccountButton from "./AccountButton";
import ContactsButton from "./ContactsButton";
import ContentSearchButton from "./ContentSearchButton";
import LanguageButton from "./LanguageButton";
import NotificationsButton from "./NotificationsButton";
import { Menu as MenuIcon } from "../../../../icons/Menu";

interface DashboardNavbarProps extends AppBarProps {
  onOpenSidebar?: () => void;
}

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

export default function DashboardNavbar(
  props: PropsWithChildren<DashboardNavbarProps>,
) {
  // eslint-disable-next-line
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
          <LanguageButton />
          <ContentSearchButton />
          <ContactsButton />
          <NotificationsButton />
          <AccountButton />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
}
