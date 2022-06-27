import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import DetailsTab from "./DetailsTab";
import InvoicesTab from "./InvoicesTab";
import LogsTab from "./LogsTab";
import { Customer } from "../../types";
import { ChevronDown as ChevronDownIcon } from "../../../../../icons/ChevronDown";
import { PencilAlt as PencilAltIcon } from "../../../../../icons/PencilAlt";
import { getInitials } from "../../../../../utils/getInitials";
import { paths } from "../../../../../paths";
import { customerApi } from "../../../../../__fake-api__/customerApi";

const tabs = [
  { label: "Details", value: "details" },
  { label: "Invoices", value: "invoices" },
  { label: "Logs", value: "logs" },
];

export default function Details() {
  // eslint-disable-next-line
  const { id: customerId } = useParams();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [currentTab, setCurrentTab] = useState<string>("details");

  useEffect(() => {
    async function setCustomerData() {
      const data = await customerApi.getCustomer();
      setCustomer(data);
    }
    setCustomerData();
  }, []);

  // eslint-disable-next-line
  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  if (!customer) {
    return null;
  }

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
          <Box>
            <Box sx={{ mb: 4 }}>
              <RouterLink
                to={`/${paths.dashboard.root}/${paths.dashboard.customers.root}`}
              >
                <Box
                  sx={{
                    color: "textPrimary",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <ArrowBackIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="subtitle2">
                    Customers
                  </Typography>
                </Box>
              </RouterLink>
            </Box>
            {customer && (
              <Grid
                container
                justifyContent="space-between"
                spacing={3}
              >
                <Grid
                  item
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    overflow: "hidden",
                  }}
                >
                  <Avatar
                    src={customer.avatar}
                    sx={{
                      height: 64,
                      mr: 2,
                      width: 64,
                    }}
                  >
                    {getInitials(customer.name)}
                  </Avatar>
                  <Box>
                    <Typography variant="h4">
                      {customer.email}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle2">
                        user_id:
                      </Typography>
                      <Chip
                        label={customer.id}
                        size="small"
                        sx={{ ml: 1 }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item sx={{ m: -1 }}>
                  <RouterLink
                    to={
                      `/${paths.dashboard.root}/${paths.dashboard.customers.root}/${customer.id}` +
                      `/${paths.dashboard.customers.edit}`
                    }
                  >
                    <Button
                      endIcon={<PencilAltIcon fontSize="small" />}
                      sx={{ m: 1 }}
                      variant="outlined"
                    >
                      Edit
                    </Button>
                  </RouterLink>
                  <Button
                    endIcon={<ChevronDownIcon fontSize="small" />}
                    sx={{ m: 1 }}
                    variant="contained"
                  >
                    Actions
                  </Button>
                </Grid>
              </Grid>
            )}
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              sx={{ mt: 3 }}
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === "details" && customer && (
              <DetailsTab customer={customer} />
            )}
            {currentTab === "invoices" && <InvoicesTab />}
            {currentTab === "logs" && <LogsTab />}
          </Box>
        </Container>
      </Box>
    </>
  );
}
