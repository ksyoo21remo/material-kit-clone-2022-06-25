import { Badge, IconButton, Tooltip } from "@mui/material";
import React, { useRef, useState } from "react";
import NotificationsPopover from "./NotificationsPopover";
import { Bell as BellIcon } from "../../../../../icons/Bell";

export default function NotificationsButton() {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [unread, setUnread] = useState<number>(0);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  // Unread notifications should come from a context and be shared with both this component and
  // notifications popover. To simplify the demo, we get it from the popover

  const handleOpenPopover = (): void => {
    setOpenPopover(true);
  };

  const handleClosePopover = (): void => {
    setOpenPopover(false);
  };

  const handleUpdateUnread = (value: number): void => {
    setUnread(value);
  };

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          ref={anchorRef}
          sx={{ ml: 1 }}
          onClick={handleOpenPopover}
        >
          <Badge color="error" badgeContent={unread}>
            <BellIcon fontSize="small" />
          </Badge>
        </IconButton>
      </Tooltip>
      <NotificationsPopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        onUpdateUnread={handleUpdateUnread}
        open={openPopover}
      />
    </>
  );
}
