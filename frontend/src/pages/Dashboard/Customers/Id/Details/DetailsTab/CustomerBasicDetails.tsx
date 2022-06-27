import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Theme,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { PropsWithChildren } from "react";
import PropertyList from "../../../../../../components/PropertyList";
import PropertyListItem from "../../../../../../components/PropertyListItem";

interface CustomerBasicDetailsProps {
  address1?: string;
  address2?: string;
  country?: string;
  email: string;
  isVerified: boolean;
  phone?: string;
  state?: string;
}

export default function CustomerBasicDetails(
  props: PropsWithChildren<CustomerBasicDetailsProps>,
) {
  const {
    address1,
    address2,
    country,
    email,
    // eslint-disable-next-line
    isVerified,
    phone,
    state,
  } = props;
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
      <CardHeader title="Basic Details" />
      <Divider />
      <PropertyList>
        <PropertyListItem
          align={align}
          divider
          label="Email"
          value={email}
        />
        <PropertyListItem
          align={align}
          divider
          label="Phone"
          value={phone}
        />
        <PropertyListItem
          align={align}
          divider
          label="Country"
          value={country}
        />
        <PropertyListItem
          align={align}
          divider
          label="State/Region"
          value={state}
        />
        <PropertyListItem
          align={align}
          divider
          label="Address 1"
          value={address1}
        />
        <PropertyListItem
          align={align}
          divider
          label="Address 2"
          value={address2}
        />
      </PropertyList>
      <CardActions
        sx={{
          flexWrap: "wrap",
          px: 3,
          py: 2,
          m: -1,
        }}
      >
        <Button sx={{ m: 1 }} variant="outlined">
          Reset &amp; Send Password
        </Button>
        <Button sx={{ m: 1 }}>Login as Customer</Button>
      </CardActions>
    </Card>
  );
}

CustomerBasicDetails.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  country: PropTypes.string,
  email: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
  phone: PropTypes.string,
  state: PropTypes.string,
};
