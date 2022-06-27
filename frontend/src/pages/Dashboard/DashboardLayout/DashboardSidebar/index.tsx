import {
  Box,
  Button,
  Divider,
  Drawer,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, {
  PropsWithChildren,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useLocation } from "react-router-dom";
import DashboardSidebarSection from "./DashboardSidebarSection";
import getSections from "./DashboardSidebarSection/getSections";
import OrganizationPopover from "./OrganizationPopover";
import Scrollbar from "../../../../components/Scrollbar";
import { Logo } from "../../../../widgets/Logo";

interface DashboardSidebarProps {
  onClose?: () => void;
  open?: boolean;
}

export default function DashboardSidebar(
  // eslint-disable-next-line
  props: PropsWithChildren<DashboardSidebarProps>,
) {
  const { onClose, open } = props;
  const location = useLocation();
  const { t } = useTranslation();
  const lgUp = useMediaQuery(
    (theme: Theme) => theme.breakpoints.up("lg"),
    {
      noSsr: true,
    },
  );
  const sections = useMemo(() => getSections(t), [t]);
  const organizationsRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line
  const [openOrganizationsPopover, setOpenOrganizationsPopover] =
    useState<boolean>(false);

  const handleOpenOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(true);
  };

  const handleCloseOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(false);
  };

  const content = (
    <>
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <Box sx={{ p: 3 }}>
              <RouterLink to="/">
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </RouterLink>
            </Box>
            <Box sx={{ px: 2 }}>
              <Box
                onClick={handleOpenOrganizationsPopover}
                ref={organizationsRef}
                sx={{
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3,
                  py: "11px",
                  borderRadius: 1,
                }}
              >
                <Box>
                  <Typography color="inherit" variant="subtitle1">
                    Acme Inc
                  </Typography>
                  <Typography color="neutral.400" variant="body2">
                    {t("Your tier")} : Premium
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider
              sx={{
                borderColor: "#2D3748", // dark divider
                my: 3,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              {sections.map((section) => (
                <DashboardSidebarSection
                  key={section.title}
                  path={location.pathname}
                  sx={{
                    mt: 2,
                    "& + &": {
                      mt: 2,
                    },
                  }}
                  {...section}
                />
              ))}
            </Box>
            <Divider
              sx={{
                borderColor: "#2D3748", // dark divider
              }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography color="neutral.100" variant="subtitle2">
              {t("Need Help?")}
            </Typography>
            <Typography color="neutral.500" variant="body2">
              {t("Check our docs")}
            </Typography>
            <RouterLink to="/docs/welcome">
              <Button
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
                variant="contained"
              >
                {t("Documentation")}
              </Button>
            </RouterLink>
          </Box>
        </Box>
      </Scrollbar>
      <OrganizationPopover
        anchorEl={organizationsRef.current}
        onClose={handleCloseOrganizationsPopover}
        open={openOrganizationsPopover}
      />
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            borderRightColor: "divider",
            borderRightStyle: "solid",
            borderRightWidth: (theme) =>
              theme.palette.mode === "dark" ? 1 : 0,
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}
