import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Scrollbar from "../../../../components/Scrollbar";

export default function LoginHistory() {
  return (
    <Card
      sx={{
        mt: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <CardContent>
        <Typography variant="h6">Login history</Typography>
        <Typography
          color="textSecondary"
          sx={{ mt: 1 }}
          variant="body2"
        >
          Your recent login activity:
        </Typography>
      </CardContent>
      <Scrollbar>
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell>Login type</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Client</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2">
                  Credentials login
                </Typography>
                <Typography variant="body2" color="body2">
                  on 10:40 AM 2021/09/01
                </Typography>
              </TableCell>
              <TableCell>95.130.17.84</TableCell>
              <TableCell>Chrome, Mac OS 10.15.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2">
                  Credentials login
                </Typography>
                <Typography color="body2" variant="body2">
                  on 10:40 AM 2021/09/01
                </Typography>
              </TableCell>
              <TableCell>95.130.17.84</TableCell>
              <TableCell>Chrome, Mac OS 10.15.7</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
}
