import {
  Box,
  ListItem,
  ListItemProps,
  ListItemText,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { PropsWithChildren } from "react";

type Direction = "horizontal" | "vertical";

interface PropertyListItemProps extends ListItemProps {
  align?: Direction;
  disableGutters?: boolean;
  label: string;
  value?: string;
}

export default function PropertyListItem(
  props: PropsWithChildren<PropertyListItemProps>,
) {
  const { align, children, disableGutters, value, label, ...other } =
    props;

  return (
    <ListItem
      sx={{
        px: disableGutters ? 0 : 3,
        py: 1.5,
      }}
      {...other}
    >
      <ListItemText
        disableTypography
        primary={
          <Typography
            sx={{ minWidth: align === "vertical" ? "inherit" : 180 }}
            variant="subtitle2"
          >
            {label}
          </Typography>
        }
        secondary={
          <Box
            sx={{
              flex: 1,
              mt: align === "vertical" ? 0.5 : 0,
            }}
          >
            {children || (
              <Typography color="textSecondary" variant="body2">
                {value}
              </Typography>
            )}
          </Box>
        }
        sx={{
          display: "flex",
          flexDirection: align === "vertical" ? "column" : "row",
          my: 0,
        }}
      />
    </ListItem>
  );
}

PropertyListItem.defaultProps = {
  align: "vertical",
};

PropertyListItem.propTypes = {
  align: PropTypes.oneOf<Direction>(["horizontal", "vertical"]),
  children: PropTypes.node,
  disableGutters: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};
