import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Theme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import PropertyList from "../../../../../../components/PropertyList";
import PropertyListItem from "../../../../../../components/PropertyListItem";

export default function CustomerPayment() {
  const mdUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md"),
  );

  const align = mdUp ? "horizontal" : "vertical";

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <CardHeader title="Payment" />
      <Divider />
      <PropertyList>
        <PropertyListItem
          align={align}
          divider
          label="Credit Card"
          value="**** **** **** **** 4142"
        />
        <PropertyListItem
          align={align}
          divider
          label="Paid"
          value="2 ($50.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="Draft"
          value="1 ($5.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="State/Region"
          value="2 ($50.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="Unpaid/Due"
          value="1 ($12.00)"
        />
        <PropertyListItem
          align={align}
          divider
          label="Refunded"
          value="0 ($0.00)"
        />
        <PropertyListItem
          align={align}
          label="Gross Income"
          value="$1,200.00"
        />
      </PropertyList>
      <Divider />
      <CardActions
        sx={{
          flexWrap: "wrap",
          px: 3,
          py: 2,
          m: -1,
        }}
      >
        <Button sx={{ m: 1 }} variant="outlined">
          Create Invoice
        </Button>
        <Button sx={{ m: 1 }}>Resend Due Invoices</Button>
      </CardActions>
    </Card>
  );
}
