import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../../../../components/Logo";
import PropertyList from "../../../../components/PropertyList";
import PropertyListItem from "../../../../components/PropertyListItem";
import { Pencil as PencilIcon } from "../../../../icons/Pencil";

const plans = [
  {
    image: <Logo />,
    name: "Startup",
    price: "0",
    current: true,
  },
  {
    image: <Logo />,
    name: "Standard",
    price: "4.99",
    current: false,
  },
  {
    image: <Logo />,
    name: "Business",
    price: "29.99",
    current: false,
  },
];

export default function PlanAndBilling() {
  const [selected, setSelected] = useState<string>("Standard");

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <Box>
        <Typography variant="h6">Change plan</Typography>
        <Typography
          color="textSecondary"
          sx={{ mt: 1 }}
          variant="body2"
        >
          You can upgrade and downgrade whenever you want
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid item key={plan.name} sm={4} xs={12}>
              <Card
                elevation={0}
                onClick={() => setSelected(plan.name)}
                variant="outlined"
                sx={{
                  cursor: "pointer",
                  ...(selected === plan.name && {
                    borderColor: "primary.main",
                    borderWidth: 2,
                    m: "-1px",
                  }),
                }}
              >
                <CardContent>
                  <Logo />
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                      mt: 1,
                    }}
                  >
                    <Typography variant="h5">
                      ${plan.price}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        mt: "auto",
                        ml: "4px",
                      }}
                      variant="body2"
                    >
                      /mo
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="overline">
                      {plan.name}
                    </Typography>
                    {plan.current && (
                      <Typography
                        color="secondary.main"
                        variant="caption"
                      >
                        Using now
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider
        sx={{
          mb: 3,
          mt: 3,
        }}
      />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Billing details</Typography>
        <Button startIcon={<PencilIcon fontSize="small" />}>
          Edit
        </Button>
      </Box>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          mt: 3,
        }}
      >
        <PropertyList>
          <PropertyListItem
            align="horizontal"
            divider
            label="Billing name"
            value="John Doe"
          />
          <PropertyListItem
            align="horizontal"
            divider
            label="Card number"
            value="**** 1111"
          />
          <PropertyListItem
            align="horizontal"
            divider
            label="Country"
            value="Germany"
          />
          <PropertyListItem
            align="horizontal"
            label="Zip / Postal code"
            value="667123"
          />
        </PropertyList>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          mb: 4,
          mt: 3,
        }}
      >
        <Typography color="textSecondary" variant="body2">
          We cannot refund once you purchased a subscription, but you
          can always
        </Typography>
        <RouterLink to="#">
          <Typography
            sx={{ ml: "4px", textDecoration: "none" }}
            variant="body2"
          >
            Cancel
          </Typography>
        </RouterLink>
      </Box>
    </Card>
  );
}
