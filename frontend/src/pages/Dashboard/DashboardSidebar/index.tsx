import React, { ReactNode, useMemo, useRef, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import OrganizationPopover from "./OrganizationPopover";
import { Logo } from "../../../components/logo";
import { Home as HomeIcon } from "../../../icons/home";
import { ChartBar as ChartBarIcon } from "../../../icons/chart-bar";
import { ChartPie as ChartPieIcon } from "../../../icons/chart-pie";
import { Truck as TruckIcon } from "../../../icons/truck";
import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";
import { Selector as SelectorIcon } from "../../../icons/selector";
import { paths } from "../../../paths";
import DashboardSidebarSection from "./DashboardSidebarSection";

interface Item {
  title: string;
  children?: Item[];
  chip?: ReactNode;
  icon?: ReactNode;
  path?: string;
}

interface Section {
  title: string;
  items: Item[];
}

function getSections(): Section[] {
  return [
    {
      title: "General",
      items: [
        {
          title: "Overview",
          path: "/dashboard",
          icon: <HomeIcon fontSize="small" />,
        },
        {
          title: "Analytics",
          path: "/dashboard/analytics",
          icon: <ChartBarIcon fontSize="small" />,
        },
        {
          title: "Finance",
          path: "/dashboard/finance",
          icon: <ChartPieIcon fontSize="small" />,
        },
        {
          title: "Logistics",
          path: "/dashboard/logistics",
          icon: <TruckIcon fontSize="small" />,
          chip: (
            <Chip
              color="secondary"
              label={
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  NEW
                </Typography>
              }
              size="small"
            />
          ),
        },
        {
          title: "Account",
          path: "/dashboard/account",
          icon: <UserCircleIcon fontSize="small" />,
        },
      ],
    },
  ];
}

function DashboardSidebar() {
  const location = useLocation();

  const organizationsRef = useRef<HTMLButtonElement | null>(null);
  const [openOrganizationsPopover, setOpenOrganizationsPopover] =
    useState<boolean>(false);
  const sections = useMemo(() => getSections(), []);

  const handleOpenOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(true);
  };

  const handleCloseOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(false);
  };

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
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
        </div>
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
              {...section}
            />
          ))}
        </Box>
        <Divider
          sx={{
            borderColor: "#2D3748", // dark divider
          }}
        />
        <Box sx={{ p: 2 }}>
          <Typography color="neutral.100" variant="subtitle2">
            도움이 필요하신가요?
          </Typography>
          <Typography color="neutral.500" variant="body2">
            문서 확인하기
          </Typography>
          <Link to="">
            <Button
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Documentation
            </Button>
          </Link>
        </Box>
      </Box>
      <OrganizationPopover
        anchorEl={organizationsRef.current}
        onClose={handleCloseOrganizationsPopover}
        open={openOrganizationsPopover}
      />
    </>
  );

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
          color: "#000000",
          width: 280,
        },
      }}
      variant="permanent"
    >
      {content}
    </Drawer>
  );
}

export default DashboardSidebar;
