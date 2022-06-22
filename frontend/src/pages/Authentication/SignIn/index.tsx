import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { AdminLabels, AdminTypes } from "../admin-types-const";
import SignInBody from "./SignInBody";

const tabs = [
  { label: AdminLabels.SUPER_ADMIN, value: AdminTypes.SUPER_ADMIN },
  {
    label: AdminLabels.CENTER_REPRESENTATIVE,
    value: AdminTypes.CENTER_REPRESENTATIVE,
  },
  {
    label: AdminLabels.CENTER_EMPLOYEE,
    value: AdminTypes.CENTER_EMPLOYEE,
  },
];

interface LocationState {
  type: number;
}

function SignIn() {
  const location = useLocation();
  let type: number | null = null;
  if (location.state !== null) {
    const locationState = location.state as LocationState;
    type = locationState.type;
  }

  const [currentTab, setCurrentTab] = useState<number>(
    type ?? AdminTypes.SUPER_ADMIN,
  );

  useEffect(() => {
    if (type) setCurrentTab(type);
  }, [type]);

  const handleTabsChange = (
    event: ChangeEvent<{}>,
    value: number,
  ): void => {
    setCurrentTab(value);
  };

  const currentTypeAdmin = useMemo(() => {
    return tabs.find((x) => x.value === currentTab)!.label;
  }, [currentTab]);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4">관리자 로그인</Typography>
          <Tabs
            indicatorColor="primary"
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="primary"
            value={currentTab}
            variant="scrollable"
            sx={{ mt: 3 }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
          <Divider sx={{ mb: 3 }} />
          <SignInBody
            currentTab={currentTab}
            currentTypeAdmin={currentTypeAdmin}
            type={currentTab}
          />
        </Container>
      </Box>
    </>
  );
}

export default SignIn;
