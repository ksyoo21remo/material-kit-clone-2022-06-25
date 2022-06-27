import {
  Avatar,
  Box,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Customer } from "../../types";
import { customerApi } from "../../../../../__fake-api__/customerApi";
import { getInitials } from "../../../../../utils/getInitials";
import CustomerEditForm from "./CustomerEditForm";

export default function Edit() {
  // eslint-disable-next-line
  const { id: customerId } = useParams();
  // eslint-disable-next-line
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    async function setCustomerData() {
      const data = await customerApi.getCustomer();
      setCustomer(data);
    }
    setCustomerData();
  }, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <RouterLink to={`/dashboard/customers`}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <ArrowBackIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="subtitle2">Customers</Typography>
              </Box>
            </RouterLink>
          </Box>
          {customer && (
            <>
              <Box
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
                  <Typography noWrap variant="h4">
                    {customer.email}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
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
              </Box>
              <Box mt={3}>
                <CustomerEditForm customer={customer} />
              </Box>
            </>
          )}
        </Container>
      </Box>
    </>
  );
}
