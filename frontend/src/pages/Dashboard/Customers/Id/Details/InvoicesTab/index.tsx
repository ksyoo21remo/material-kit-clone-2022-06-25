import {
  Card,
  CardHeader,
  Divider,
  // eslint-disable-next-line
  IconButton,
  // eslint-disable-next-line
  Table,
  // eslint-disable-next-line
  TableBody,
  // eslint-disable-next-line
  TableCell,
  // eslint-disable-next-line
  TableHead,
  TablePagination,
  // eslint-disable-next-line
  TableRow,
} from "@mui/material";
// eslint-disable-next-line
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { Link as RouterLink } from "react-router-dom";
import { CustomerInvoice } from "../../../types";
import { customerApi } from "../../../../../../__fake-api__/customerApi";
// eslint-disable-next-line
import Scrollbar from "../../../../../../components/Scrollbar";
// eslint-disable-next-line
import SeverityPill from "../../../../../../components/SeverityPill";
// eslint-disable-next-line
import { ArrowRight as ArrowRightIcon } from "../../../../../../icons/ArrowRight";
import { DotsHorizontal as DotsHorizontalIcon } from "../../../../../../icons/DotsHorizontal";
// eslint-disable-next-line
import { paths } from "../../../../../../paths";

export default function InvoicesTab() {
  const [invoices, setInvoices] = useState<CustomerInvoice[]>([]);

  useEffect(() => {
    async function setInvoicesData() {
      const data = await customerApi.getCustomerInvoices();
      setInvoices(data);
    }
    setInvoicesData();
  }, []);

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <CardHeader
        action={<DotsHorizontalIcon />}
        title="Recent Invoices"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>#{invoice.id}</TableCell>
                <TableCell>
                  {format(invoice.issueDate, "MMM dd,yyyy")}
                </TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  <SeverityPill
                    color={
                      invoice.status === "paid" ? "success" : "error"
                    }
                  >
                    {invoice.status}
                  </SeverityPill>
                </TableCell>
                <TableCell align="right">
                  <RouterLink
                    to={`/${paths.dashboard.root}/${paths.dashboard.invoices.root}/${invoice.id}`}
                  >
                    <IconButton>
                      <ArrowRightIcon fontSize="small" />
                    </IconButton>
                  </RouterLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={invoices.length}
        onPageChange={(): void => {}}
        onRowsPerPageChange={(): void => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
