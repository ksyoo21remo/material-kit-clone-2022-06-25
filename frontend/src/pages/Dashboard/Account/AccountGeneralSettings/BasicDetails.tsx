import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { UserCircle as UserCircleIcon } from "../../../../icons/UserCircle";

export default function BasicDetails() {
  const user = {
    avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    name: "Anika Visser",
  };

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Typography variant="h6">Basic details</Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <Avatar
                src={user.avatar}
                sx={{
                  height: 64,
                  mr: 2,
                  width: 64,
                }}
              >
                <UserCircleIcon fontSize="small" />
              </Avatar>
              <Button>Change</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 3,
                alignItems: "center",
              }}
            >
              <TextField
                defaultValue={user.name}
                label="Full Name"
                size="small"
                sx={{
                  flexGrow: 1,
                  mr: 3,
                }}
              />
              <Button>Save</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 3,
                alignItems: "center",
              }}
            >
              <TextField
                defaultValue="dummy.account@gmail.com"
                disabled
                label="Email Address"
                required
                size="small"
                sx={{
                  flexGrow: 1,
                  mr: 3,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderStyle: "dashed",
                  },
                }}
              />
              <Button>Edit</Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
