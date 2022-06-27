import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import CustomerListTable from "./CustomerListTable";
import { Customer } from "./types";
import { customerApi } from "../../../__fake-api__/customerApi";
import { Download as DownloadIcon } from "../../../icons/Download";
import { Plus as PlusIcon } from "../../../icons/Plus";
import { Search as SearchIcon } from "../../../icons/Search";
import { Upload as UploadIcon } from "../../../icons/Upload";

type TabValue =
  | "all"
  | "hasAcceptedMarketing"
  | "isProspect"
  | "isReturning";

interface Tab {
  label: string;
  value: TabValue;
}

const tabs: Tab[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Accepts Marketing",
    value: "hasAcceptedMarketing",
  },
  {
    label: "Prospect",
    value: "isProspect",
  },
  {
    label: "Returning",
    value: "isReturning",
  },
];

interface Filters {
  query?: string;
  hasAcceptedMarketing?: boolean;
  isProspect?: boolean;
  isReturning?: boolean;
}

type Sort =
  | "updatedAt|desc"
  | "updatedAt|asc"
  | "totalOrders|desc"
  | "totalOrders|asc";

interface SortOption {
  label: string;
  value: Sort;
}

const sortOptions: SortOption[] = [
  {
    label: "Last update (newest)",
    value: "updatedAt|desc",
  },
  {
    label: "Last update (oldest)",
    value: "updatedAt|asc",
  },
  {
    label: "Total orders (highest)",
    value: "totalOrders|desc",
  },
  {
    label: "Total orders (lowest)",
    value: "totalOrders|asc",
  },
];

const applyFilters = (
  customers: Customer[],
  filters: Filters,
): Customer[] =>
  customers.filter((customer) => {
    if (filters.query) {
      let queryMatched = false;
      const properties: ("email" | "name")[] = ["email", "name"];

      properties.forEach((property) => {
        if (
          customer[property]
            .toLowerCase()
            .includes(filters.query!.toLowerCase())
        ) {
          queryMatched = true;
        }
      });

      if (!queryMatched) {
        return false;
      }
    }

    if (
      filters.hasAcceptedMarketing &&
      !customer.hasAcceptedMarketing
    ) {
      return false;
    }

    if (filters.isProspect && !customer.isProspect) {
      return false;
    }

    if (filters.isReturning && !customer.isReturning) {
      return false;
    }

    return true;
  });

type SortField = "updatedAt" | "totalOrders";

type SortDir = "asc" | "desc";

const descendingComparator = (
  a: Customer,
  b: Customer,
  sortBy: SortField,
): number => {
  // When compared to something undefined, always returns false.
  // This means that if a field does not exist from either element ('a' or 'b') the return will be 0.

  if (b[sortBy]! < a[sortBy]!) {
    return -1;
  }

  if (b[sortBy]! > a[sortBy]!) {
    return 1;
  }

  return 0;
};

// prettier-ignore
const getComparator = (sortDir: SortDir, sortBy: SortField) =>
  sortDir === "desc"
    ? (a: Customer, b: Customer) => descendingComparator(a, b, sortBy)
    : (a: Customer, b: Customer) =>
      -descendingComparator(a, b, sortBy);

const applySort = (customers: Customer[], sort: Sort): Customer[] => {
  const [sortBy, sortDir] = sort.split("|") as [SortField, SortDir];
  const comparator = getComparator(sortDir, sortBy);
  const stabilizedThis = customers.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    // @ts-ignore
    const newOrder = comparator(a[0], b[0]);

    if (newOrder !== 0) {
      return newOrder;
    }

    // @ts-ignore
    return a[1] - b[1];
  });

  // @ts-ignore
  return stabilizedThis.map((el) => el[0]);
};

const applyPagination = (
  customers: Customer[],
  page: number,
  rowsPerPage: number,
): Customer[] =>
  customers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

export default function List() {
  const [currentTab, setCurrentTab] = useState<TabValue>("all");
  const [filters, setFilters] = useState<Filters>({
    query: "",
    hasAcceptedMarketing: undefined,
    isProspect: undefined,
    isReturning: undefined,
  });
  const queryRef = useRef<HTMLInputElement | null>(null);
  const [sort, setSort] = useState<Sort>(sortOptions[0].value);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function setCustomersData() {
      const data = await customerApi.getCustomers();
      setCustomers(data);
    }
    setCustomersData();
  }, []);

  const handleTabsChange = (
    event: ChangeEvent<{}>,
    value: TabValue,
  ): void => {
    const updatedFilters: Filters = {
      ...filters,
      hasAcceptedMarketing: undefined,
      isProspect: undefined,
      isReturning: undefined,
    };

    if (value !== "all") {
      updatedFilters[value] = true;
    }

    setFilters(updatedFilters);
    setCurrentTab(value);
  };

  const handleQueryChange = (
    event: FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();
    setFilters((prevState) => ({
      ...prevState,
      query: queryRef.current?.value,
    }));
  };

  const handleSortChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setSort(event.target.value as Sort);
  };

  const handlePageChange = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  // Usually query is done on backend with indexing solutions
  const filteredCustomers = applyFilters(customers, filters);
  const sortedCustomers = applySort(filteredCustomers, sort);
  const paginatedCustomers = applyPagination(
    sortedCustomers,
    page,
    rowsPerPage,
  );

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4">Customers</Typography>
              </Grid>
              <Grid item>
                <Button
                  startIcon={<PlusIcon fontSize="small" />}
                  variant="contained"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                m: -1,
                mt: 3,
              }}
            >
              <Button
                startIcon={<UploadIcon fontSize="small" />}
                sx={{ m: 1 }}
              >
                Import
              </Button>
              <Button
                startIcon={<DownloadIcon fontSize="small" />}
                sx={{ m: 1 }}
              >
                Export
              </Button>
            </Box>
          </Box>
          <Card
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "neutral.900"
                  : "neutral.100",
            }}
          >
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              sx={{ px: 3 }}
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
            <Divider />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                m: -1.5,
                p: 3,
              }}
            >
              <Box
                component="form"
                onSubmit={handleQueryChange}
                sx={{
                  flexGrow: 1,
                  m: 1.5,
                }}
              >
                <TextField
                  defaultValue=""
                  fullWidth
                  inputProps={{ ref: queryRef }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search customers"
                />
              </Box>
              <TextField
                label="Sort By"
                name="sort"
                onChange={handleSortChange}
                select
                SelectProps={{ native: true }}
                sx={{ m: 1.5 }}
                value={sort}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <CustomerListTable
              customers={paginatedCustomers}
              customersCount={filteredCustomers.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          </Card>
        </Container>
      </Box>
    </>
  );
}
