import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Scrollbar from "../../../../components/Scrollbar";
import SeverityPill from "../../../../components/SeverityPill";
import { DotsHorizontal as DotsHorizontalIcon } from "../../../../icons/DotsHorizontal";
import { Mail as MailIcon } from "../../../../icons/Mail";
import { UserCircle as UserCircleIcon } from "../../../../icons/UserCircle";

export default function AccountTeamSettings() {
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
        <Box>
          <Typography variant="h6">Invite members</Typography>
          <Typography
            color="textSecondary"
            variant="body2"
            sx={{ mt: 1 }}
          >
            You currently pay for 2 Editor Seats.
          </Typography>
        </Box>
        <Divider
          sx={{
            mt: 3,
            mb: 3,
          }}
        />
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            m: -3,
          }}
        >
          <TextField
            label="Email address"
            placeholder="Add multiple addresses separated by commas"
            size="small"
            sx={{
              m: 1.5,
              flexGrow: 1,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <Button sx={{ m: 1.5 }} variant="contained">
            Send Invite
          </Button>
        </Box>
      </CardContent>
      <Scrollbar>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>Member</TableCell>
              <TableCell>Role</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Avatar
                    sx={{
                      height: 40,
                      width: 40,
                      mr: 1,
                    }}
                  >
                    <UserCircleIcon fontSize="small" />
                  </Avatar>
                  <div>
                    <Typography variant="subtitle2">
                      Cao Yu
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      cao.yu@devias.io
                    </Typography>
                  </div>
                </Box>
              </TableCell>
              <TableCell>
                <SeverityPill>owner</SeverityPill>
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <DotsHorizontalIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Avatar
                    alt="Cao Yu"
                    src="/static/mock-images/avatars/avatar-cao-yu.png"
                    sx={{
                      height: 40,
                      width: 40,
                      mr: 1,
                    }}
                  />
                  <div>
                    <Typography variant="subtitle2">
                      Cao Yu
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      cao.yu@devias.io
                    </Typography>
                  </div>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="body2">
                  Editor
                </Typography>
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <DotsHorizontalIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
}
