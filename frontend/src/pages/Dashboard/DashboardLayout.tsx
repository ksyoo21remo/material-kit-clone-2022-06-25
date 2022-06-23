import React, { PropsWithChildren, ReactNode, useState } from "react";
import { Box, styled } from "@mui/material";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout(
  props: PropsWithChildren<DashboardLayoutProps>,
) {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box>대시보드 헤더</Box>
          {children}
          <Box>대시보드 푸터</Box>
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar
        onOpenSidebar={(): void => setIsSidebarOpen(true)}
      />
      <DashboardSidebar
        onClose={(): void => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
}

export default DashboardLayout;
