import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import AccountBillingSettings from "./AccountBillingSettings";
import AccountGeneralSettings from "./AccountGeneralSettings";
import AccountNotificationsSettings from "./AccountNotificationsSettings";
import AccountSecuritySettings from "./AccountSecuritySettings";
import AccountTeamSettings from "./AccountTeamSettings";

const tabs = [
  { label: "General", value: "general" },
  { label: "Billing", value: "billing" },
  { label: "Team", value: "team" },
  { label: "Notifications", value: "notifications" },
  { label: "Security", value: "security" },
];

export default function Account() {
  const [currentTab, setCurrentTab] = useState<string>("general");

  const handleTabsChange = (
    event: ChangeEvent<{}>,
    value: string,
  ): void => {
    setCurrentTab(value);
  };

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
          <Typography variant="h4">Account</Typography>
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
          {currentTab === "general" && <AccountGeneralSettings />}
          {currentTab === "billing" && <AccountBillingSettings />}
          {currentTab === "team" && <AccountTeamSettings />}
          {currentTab === "notifications" && (
            <AccountNotificationsSettings />
          )}
          {currentTab === "security" && <AccountSecuritySettings />}
        </Container>
      </Box>
    </>
  );
}
