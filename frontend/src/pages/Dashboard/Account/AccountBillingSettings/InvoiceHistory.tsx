import {
  Box,
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
import { Link as RouterLink } from "react-router-dom";

export default function InvoiceHistory() {
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
        <Box>
          <Typography variant="h6">Invoice history</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: 1 }}
          >
            You can view and download all your previous invoices here.
            If you’ve just made a payment, it may take a few hours for
            it to appear in the table below.
          </Typography>
        </Box>
      </CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Total (incl. tax)</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>2 Jun 2021</TableCell>
            <TableCell>$4.99</TableCell>
            <TableCell align="right">
              <RouterLink to="#">View Invoice</RouterLink>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2 May 2021</TableCell>
            <TableCell>$4.99</TableCell>
            <TableCell align="right">
              <RouterLink to="#">View Invoice</RouterLink>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2 April 2021</TableCell>
            <TableCell>$4.99</TableCell>
            <TableCell align="right">
              <RouterLink to="#">View Invoice</RouterLink>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
