import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Avatar,
  Box,
  Divider,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { Cog as CogIcon } from "../../../icons/cog";
import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";
import { SwitchHorizontalOutlined as SwitchHorizontalOutlinedIcon } from "../../../icons/switch-horizontal-outlined";

interface AccountPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

function AccountPopover(
  props: PropsWithChildren<AccountPopoverProps>,
) {
  const { anchorEl, onClose, open, ...other } = props;
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: "/static/mock-images/avatars/avatar-carson_darrin.png",
    name: "Carson Darrin",
  };

  const handleLogout = async (): Promise<void> => {
    try {
      onClose?.();
      // await logout();
      // router.push('/').catch(console.error);
    } catch (err) {
      console.error(err);
      // toast.error('Unable to logout.');
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 300 } }}
      transitionDuration={0}
      {...other}
    >
      <Box
        sx={{
          alignItems: "center",
          p: 2,
          display: "flex",
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 40,
            width: 40,
          }}
        >
          <UserCircleIcon fontSize="small" />
        </Avatar>
        <Box
          sx={{
            ml: 1,
          }}
        >
          <Typography variant="body1">{user.name}</Typography>
          <Typography color="textSecondary" variant="body2">
            Acme Inc
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        <Link to="">
          <MenuItem>
            <ListItemIcon>
              <UserCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1">Profile</Typography>
              }
            />
          </MenuItem>
        </Link>
        <Link to="">
          <MenuItem>
            <ListItemIcon>
              <CogIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1">Settings</Typography>
              }
            />
          </MenuItem>
        </Link>
        <Link to="">
          <MenuItem>
            <ListItemIcon>
              <SwitchHorizontalOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1">
                  Change organization
                </Typography>
              }
            />
          </MenuItem>
        </Link>
        <Divider sx={{ my: 1 }} />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Logout</Typography>}
          />
        </MenuItem>
      </Box>
    </Popover>
  );
}

export default AccountPopover;
