import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";
import React, { PropsWithChildren, ReactNode, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayoutRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export default function DashboardLayout(
  props: PropsWithChildren<DashboardLayoutProps>,
) {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <DashboardNavbar
        onOpenSidebar={(): void => setIsSidebarOpen(true)}
      />
      <DashboardSidebar
        onClose={(): void => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
