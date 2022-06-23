import React, { PropsWithChildren } from "react";
import { MenuItem, Popover } from "@mui/material";

interface OrganizationPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

const organizations = ["Acme Inc", "Division Inc"];

function OrganizationPopover(
  props: PropsWithChildren<OrganizationPopoverProps>,
) {
  const { anchorEl, onClose, open } = props;

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
      open={Boolean(open)}
      PaperProps={{ sx: { width: 248 } }}
      transitionDuration={0}
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

export default OrganizationPopover;
