import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { formatDistanceToNowStrict } from "date-fns";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { chatApi } from "../../../../../__fake-api__/chatApi";
import StatusIndicator from "../../../../../components/StatusIndicator";
import { Contact } from "../../../../../types/Chat";

interface ContactsPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

export default function ContactsPopover(
  props: PropsWithChildren<ContactsPopoverProps>,
) {
  const { anchorEl, onClose, open, ...other } = props;
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function getContactsData() {
      const data = await chatApi.getContacts();
      setContacts(data);
    }
    getContactsData();
  }, []);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={!!open}
      PaperProps={{
        sx: {
          p: 2,
          width: 320,
        },
      }}
      transitionDuration={0}
      {...other}
    >
      <Typography variant="h6">Contacts</Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding>
          {contacts.map((contact) => (
            <ListItem disableGutters key={contact.id}>
              <ListItemAvatar>
                <Avatar
                  src={contact.avatar}
                  sx={{ cursor: "pointer" }}
                />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <>
                    <RouterLink to="/">
                      <Typography
                        variant="subtitle2"
                        sx={{ cursor: "pointer" }}
                      >
                        {contact.name}
                      </Typography>
                    </RouterLink>
                    {/* <Link
                        color="textPrimary"
                        noWrap
                        sx={{ cursor: 'pointer' }}
                        underline="none"
                        variant="subtitle2"
                      >
                        {contact.name}
                      </Link> */}
                  </>
                }
              />
              {contact.isActive ? (
                <StatusIndicator size="small" status="online" />
              ) : (
                contact.lastActivity && (
                  <Typography
                    color="textSecondary"
                    noWrap
                    variant="caption"
                  >
                    {formatDistanceToNowStrict(contact.lastActivity)}{" "}
                    ago
                  </Typography>
                )
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Popover>
  );
}
