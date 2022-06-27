import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";
import CustomerBasicDetails from "./CustomerBasicDetails";
import CustomerDataManagement from "./CustomerDataManagement";
import CustomerEmailsSummary from "./CustomerEmailsSummary";
import CustomerPayment from "./CustomerPayment";
import { Customer } from "../../../types";

interface DetailsTabProps {
  customer: Customer;
}

export default function DetailsTab(
  props: PropsWithChildren<DetailsTabProps>,
) {
  const { customer } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomerBasicDetails
          address1={customer.address1}
          address2={customer.address2}
          country={customer.country}
          email={customer.email}
          isVerified={!!customer.isVerified}
          phone={customer.phone}
          state={customer.state}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomerPayment />
      </Grid>
      <Grid item xs={12}>
        <CustomerEmailsSummary />
      </Grid>
      <Grid item xs={12}>
        <CustomerDataManagement />
      </Grid>
    </Grid>
  );
}
