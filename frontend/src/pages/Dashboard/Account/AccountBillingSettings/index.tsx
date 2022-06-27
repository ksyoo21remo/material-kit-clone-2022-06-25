import { Box } from "@mui/material";
import React from "react";
import InvoiceHistory from "./InvoiceHistory";
import PlanAndBilling from "./PlanAndBilling";

export default function AccountBillingSettings() {
  return (
    <Box>
      <PlanAndBilling />
      <InvoiceHistory />
    </Box>
  );
}
