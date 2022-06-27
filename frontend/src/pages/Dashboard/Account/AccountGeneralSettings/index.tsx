import { Box } from "@mui/material";
import React from "react";
import BasicDetails from "./BasicDetails";
import DeleteAccount from "./DeleteAccount";
import PublicProfile from "./PublicProfile";

export default function AccountGeneralSettings() {
  return (
    <Box sx={{ mt: 4 }}>
      <BasicDetails />
      <PublicProfile />
      <DeleteAccount />
    </Box>
  );
}
