import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import numeral from "numeral";
import PropTypes from "prop-types";
import React, {
  ChangeEvent,
  MouseEvent,
  PropsWithChildren,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { Customer } from "./types";
import Scrollbar from "../../../components/Scrollbar";
import { ArrowRight as ArrowRightIcon } from "../../../icons/ArrowRight";
import { PencilAlt as PencilAltIcon } from "../../../icons/PencilAlt";
import { getInitials } from "../../../utils/getInitials";

interface CustomerListTableProps {
  customers: Customer[];
  customersCount: number;
  // eslint-disable-next-line
  onPageChange: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  // eslint-disable-next-line
  onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  page: number;
  rowsPerPage: number;
}

export default function CustomerListTable(
  props: PropsWithChildren<CustomerListTableProps>,
) {
  const {
    customers,
    customersCount,
    onPageChange,
    onRowsPerPageChange,
    rowsPerPage,
    page,
  } = props;
  const [selectedCustomers, setSelectedCustomers] = useState<
    string[]
  >([]);

  const handleSelectAllCustomers = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setSelectedCustomers(
      event.target.checked
        ? customers.map((customer) => customer.id)
        : [],
    );
  };

  const handleSelectOneCustomer = (
    event: ChangeEvent<HTMLInputElement>,
    customerId: string,
  ): void => {
    if (!selectedCustomers.includes(customerId)) {
      setSelectedCustomers((prevSelected) => [
        ...prevSelected,
        customerId,
      ]);
    } else {
      setSelectedCustomers((prevSelected) =>
        prevSelected.filter((id) => id !== customerId),
      );
    }
  };

  const enableBulkActions = selectedCustomers.length > 0;
  const selectedSomeCustomers =
    selectedCustomers.length > 0 &&
    selectedCustomers.length < customers.length;
  const selectedAllCustomers =
    selectedCustomers.length === customers.length;

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "neutral.800"
              : "neutral.100",
          display: enableBulkActions ? "block" : "none",
          px: 2,
          py: 0.5,
        }}
      >
        <Checkbox
          checked={selectedAllCustomers}
          indeterminate={selectedSomeCustomers}
          onChange={handleSelectAllCustomers}
        />
        <Button size="small" sx={{ ml: 2 }}>
          Delete
        </Button>
        <Button size="small" sx={{ ml: 2 }}>
          Edit
        </Button>
      </Box>
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead
            sx={{
              visibility: enableBulkActions ? "collapse" : "visible",
            }}
          >
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAllCustomers}
                  indeterminate={selectedSomeCustomers}
                  onChange={handleSelectAllCustomers}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Orders</TableCell>
              <TableCell>Spent</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => {
              const isCustomerSelected = selectedCustomers.includes(
                customer.id,
              );

              return (
                <TableRow
                  hover
                  key={customer.id}
                  selected={isCustomerSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isCustomerSelected}
                      onChange={(event) =>
                        handleSelectOneCustomer(event, customer.id)
                      }
                      value={isCustomerSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar
                        src={customer.avatar}
                        sx={{
                          height: 42,
                          width: 42,
                        }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Box sx={{ ml: 1 }}>
                        <Link to="/dashboard/customers/1">
                          <Typography
                            color="inherit"
                            variant="subtitle2"
                          >
                            {customer.name}
                          </Typography>
                        </Link>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {customer.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {`${customer.city}, ${customer.state}, ${customer.country}`}
                  </TableCell>
                  <TableCell>{customer.totalOrders}</TableCell>
                  <TableCell>
                    <Typography
                      color="success.main"
                      variant="subtitle2"
                    >
                      {numeral(customer.totalAmountSpent).format(
                        `${customer.currency}0,0.00`,
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Link to="/dashboard/customers/1/edit">
                      <IconButton component="a">
                        <PencilAltIcon fontSize="small" />
                      </IconButton>
                    </Link>
                    <Link to="/dashboard/customers/1">
                      <IconButton component="a">
                        <ArrowRightIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={customersCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  );
}

CustomerListTable.propTypes = {
  customers: PropTypes.array.isRequired,
  customersCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
