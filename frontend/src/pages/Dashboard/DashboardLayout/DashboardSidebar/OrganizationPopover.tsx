import { MenuItem, Popover } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface OrganizationPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

const organizations = ["Acme Inc", "Division Inc"];

export default function OrganizationPopover(
  props: PropsWithChildren<OrganizationPopoverProps>,
) {
  const { anchorEl, onClose, open, ...other } = props;

  // eslint-disable-next-line
  const handleChange = (organization: string): void => {
    onClose?.();
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 248 } }}
      transitionDuration={0}
      {...other}
    >
      {organizations.map((organization) => (
        <MenuItem
          key={organization}
          onClick={() => handleChange(organization)}
        >
          {organization}
        </MenuItem>
      ))}
    </Popover>
  );
}
