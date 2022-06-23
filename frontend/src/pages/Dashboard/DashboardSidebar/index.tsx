import React, {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DashboardSidebarSection from "./DashboardSidebarSection";
import OrganizationPopover from "./OrganizationPopover";
import { sidebarSectionsData } from "./sidebarSectionsData";
import { Logo } from "../../../components/logo";
import { Scrollbar } from "../../../components/scrollbar";
import { Selector as SelectorIcon } from "../../../icons/selector";
import { paths } from "../../../paths";

interface DashboardSidebarProps {
  onClose?: () => void;
  open?: boolean;
}

function DashboardSidebar(
  props: PropsWithChildren<DashboardSidebarProps>,
) {
  const { onClose, open } = props;

  const lgUp = useMediaQuery(
    (theme: Theme) => theme.breakpoints.up("lg"),
    {
      noSsr: true,
    },
  );
  const organizationsRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line
  const [openOrganizationsPopover, setOpenOrganizationsPopover] =
    useState<boolean>(false);

  const handlePathChange = () => {
    if (open) {
      onClose?.();
    }
  };

  useEffect(handlePathChange, []);

  const handleOpenOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(true);
  };

  // eslint-disable-next-line
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
          <Box sx={{ p: 3 }}>
            <Link to={paths.home}>
              <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              />
            </Link>
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
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Acme Inc
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Your tier : Premium
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                }}
              />
            </Box>
          </Box>
          <Divider
            sx={{
              borderColor: "#2D3748", // dark divider
              my: 3,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {sidebarSectionsData.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path="."
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

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default DashboardSidebar;
