import React, { PropsWithChildren } from "react";
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
import { Logout as LogoutIcon } from "@mui/icons-material";
import { Cog as CogIcon } from "../../../icons/cog";
import { SwitchHorizontalOutlined as SwitchHorizontalOutlinedIcon } from "../../../icons/switch-horizontal-outlined";
import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";

interface AccountPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

function AccountPopover(
  props: PropsWithChildren<AccountPopoverProps>,
) {
  const { anchorEl, onClose, open } = props;
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
      open={Boolean(open)}
      PaperProps={{ sx: { width: 300 } }}
      transitionDuration={0}
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
        <MenuItem component="a">
          <ListItemIcon>
            <UserCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">프로필</Typography>}
          />
        </MenuItem>
        <MenuItem component="a">
          <ListItemIcon>
            <CogIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">설정</Typography>}
          />
        </MenuItem>
        <MenuItem component="a">
          <ListItemIcon>
            <SwitchHorizontalOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">회사 변경</Typography>
            }
          />
        </MenuItem>
      </Box>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary={<Typography variant="body1">Logout</Typography>}
        />
      </MenuItem>
    </Popover>
  );
}

export default AccountPopover;
