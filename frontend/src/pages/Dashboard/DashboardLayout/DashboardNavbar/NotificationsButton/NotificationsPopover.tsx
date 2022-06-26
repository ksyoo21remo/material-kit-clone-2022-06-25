import {
  Box,
  IconButton,
  List,
  ListItem,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import { subDays, subHours } from "date-fns";
import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import Scrollbar from "../../../../../components/Scrollbar";
import { MailOpen as MailOpenIcon } from "../../../../../icons/MailOpen";
import { X as XIcon } from "../../../../../icons/X";
import { Notification } from "../../../../../types/Notification";
import getNotificationContent from "./getNotificationContent";

interface NotificationsPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  // eslint-disable-next-line
  onUpdateUnread?: (value: number) => void;
  open?: boolean;
}

const now = new Date();

const data: Notification[] = [
  {
    id: "5e8883f1b51cc1956a5a1ec0",
    author: "Jie Yang Song",
    avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    createdAt: subHours(now, 2).getTime(),
    job: "Remote React / React Native Developer",
    read: true,
    type: "job_add",
  },
  {
    id: "bfb21a370c017acc416757c7",
    author: "Jie Yang Song",
    avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    createdAt: subHours(now, 2).getTime(),
    job: "Senior Golang Backend Engineer",
    read: false,
    type: "job_add",
  },
  {
    id: "20d9df4f23fff19668d7031c",
    createdAt: subDays(now, 1).getTime(),
    description: "Logistics management is now available",
    read: true,
    type: "new_feature",
  },
  {
    id: "5e8883fca0e8612044248ecf",
    author: "Jie Yang Song",
    avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    company: "Augmastic Inc",
    createdAt: subHours(now, 2).getTime(),
    read: false,
    type: "company_created",
  },
];

export default function NotificationsPopover(
  props: PropsWithChildren<NotificationsPopoverProps>,
) {
  const { anchorEl, onClose, onUpdateUnread, open, ...other } = props;
  const [notifications, setNotifications] =
    useState<Notification[]>(data);
  const unread = useMemo(
    () =>
      notifications.reduce(
        (acc, notification) => acc + (notification.read ? 0 : 1),
        0,
      ),
    [notifications],
  );

  useEffect(() => {
    onUpdateUnread?.(unread);
  }, [onUpdateUnread, unread]);

  const handleMarkAllAsRead = (): void => {
    setNotifications((prevState) =>
      prevState.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  const handleRemoveOne = (notificationId: string) => {
    setNotifications((prevState) =>
      prevState.filter(
        (notification) => notification.id !== notificationId,
      ),
    );
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 380 } }}
      transitionDuration={0}
      {...other}
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 2,
        }}
      >
        <Typography color="inherit" variant="h6">
          Notifications
        </Typography>
        <Tooltip title="Mark all as read">
          <IconButton
            onClick={handleMarkAllAsRead}
            size="small"
            sx={{ color: "inherit" }}
          >
            <MailOpenIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      {notifications.length === 0 ? (
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">
            There are no notifications
          </Typography>
        </Box>
      ) : (
        <Scrollbar sx={{ maxHeight: 400 }}>
          <List disablePadding>
            {notifications.map((notification) => (
              <ListItem
                divider
                key={notification.id}
                sx={{
                  alignItems: "flex-start",
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                  "& .MuiListItemSecondaryAction-root": {
                    top: "24%",
                  },
                }}
                secondaryAction={
                  <Tooltip title="Remove">
                    <IconButton
                      edge="end"
                      onClick={() => handleRemoveOne(notification.id)}
                      size="small"
                    >
                      <XIcon sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Tooltip>
                }
              >
                {getNotificationContent(notification)}
              </ListItem>
            ))}
          </List>
        </Scrollbar>
      )}
    </Popover>
  );
}
