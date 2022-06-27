import { List } from "@mui/material";
import PropTypes from "prop-types";
import React, { PropsWithChildren, ReactNode } from "react";

interface PropertyListProps {
  children: ReactNode;
}

export default function PropertyList(
  props: PropsWithChildren<PropertyListProps>,
) {
  const { children } = props;

  return <List disablePadding>{children}</List>;
}

PropertyList.propTypes = {
  children: PropTypes.node,
};
