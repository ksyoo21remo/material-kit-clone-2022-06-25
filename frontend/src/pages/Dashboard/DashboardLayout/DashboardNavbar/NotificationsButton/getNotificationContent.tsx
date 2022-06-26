import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChatAlt as ChatAltIcon } from "../../../../../icons/ChatAlt";
import { UserCircle as UserCircleIcon } from "../../../../../icons/UserCircle";
import { Notification } from "../../../../../types/Notification";

export default function getNotificationContent(
  notification: Notification,
) {
  // prettier-ignore
  switch (notification.type) {
  case "job_add":
    return (
      <>
        <ListItemAvatar sx={{ mt: 0.5 }}>
          <Avatar src={notification.avatar}>
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ mr: 0.5 }} variant="subtitle2">
                {notification.author}
              </Typography>
              <Typography sx={{ mr: 0.5 }} variant="body2">
                  added a new job
              </Typography>
              <RouterLink to="/dashboard/jobs">
                {notification.job}
              </RouterLink>
            </Box>
          }
          secondary={
            <Typography color="textSecondary" variant="caption">
              {format(notification.createdAt, "MMM dd, h:mm a")}
            </Typography>
          }
          sx={{ my: 0 }}
        />
      </>
    );
  case "new_feature":
    return (
      <>
        <ListItemAvatar sx={{ mt: 0.5 }}>
          <Avatar>
            <ChatAltIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
                  New feature!
              </Typography>
              <Typography variant="body2">
                {notification.description}
              </Typography>
            </Box>
          }
          secondary={
            <Typography color="textSecondary" variant="caption">
              {format(notification.createdAt, "MMM dd, h:mm a")}
            </Typography>
          }
          sx={{ my: 0 }}
        />
      </>
    );
  case "company_created":
    return (
      <>
        <ListItemAvatar sx={{ mt: 0.5 }}>
          <Avatar src={notification.avatar}>
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                m: 0,
              }}
            >
              <Typography sx={{ mr: 0.5 }} variant="subtitle2">
                {notification.author}
              </Typography>
              <Typography variant="body2" sx={{ mr: 0.5 }}>
                  created
              </Typography>
              <RouterLink to="/dashboard/jobs">
                {notification.company}
              </RouterLink>
            </Box>
          }
          secondary={
            <Typography color="textSecondary" variant="caption">
              {format(notification.createdAt, "MMM dd, h:mm a")}
            </Typography>
          }
          sx={{ my: 0 }}
        />
      </>
    );
  default:
    return null;
  }
}
