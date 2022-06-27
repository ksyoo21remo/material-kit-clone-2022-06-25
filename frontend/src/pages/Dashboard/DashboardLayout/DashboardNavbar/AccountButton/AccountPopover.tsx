import LogoutIcon from "@mui/icons-material/Logout";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { PropsWithChildren } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../hooks/useAuth";
import { Cog as CogIcon } from "../../../../../icons/Cog";
import { SwitchHorizontalOutlined as SwitchHorizontalOutlinedIcon } from "../../../../../icons/SwitchHorizontalOutlined";
import { UserCircle as UserCircleIcon } from "../../../../../icons/UserCircle";
import { paths } from "../../../../../paths";

interface AccountPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

export default function AccountPopover(
  props: PropsWithChildren<AccountPopoverProps>,
) {
  const { anchorEl, onClose, open, ...other } = props;
  const { logout } = useAuth();
  const navigate = useNavigate();
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    name: "Anika Visser",
  };

  const handleLogout = async (): Promise<void> => {
    try {
      onClose?.();
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err);
      // toast.error("Unable to logout.");
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
        <RouterLink
          to={`/${paths.dashboard.root}/${paths.dashboard.socialMedia.root}/${paths.dashboard.socialMedia.profile}`}
        >
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
        </RouterLink>
        <RouterLink
          to={`/${paths.dashboard.root}/${paths.dashboard.account}`}
        >
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
        </RouterLink>
        <RouterLink to={`/${paths.dashboard.root}`}>
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
        </RouterLink>
        <Divider />
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

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
