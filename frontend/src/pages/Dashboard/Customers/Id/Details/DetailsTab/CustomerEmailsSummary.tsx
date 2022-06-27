import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { CustomerEmail } from "../../../types";
import { customerApi } from "../../../../../../__fake-api__/customerApi";
import { ArrowRight as ArrowRightIcon } from "../../../../../../icons/ArrowRight";

const emailOptions = [
  "Resend last invoice",
  "Send password reset",
  "Send verification",
];

export default function CustomerEmailsSummary() {
  const [emailOption, setEmailOption] = useState<string>(
    emailOptions[0],
  );
  const [emails, setEmails] = useState<CustomerEmail[]>([]);

  useEffect(() => {
    async function setEmailsData() {
      const data = await customerApi.getCustomerEmails();
      setEmails(data);
    }
    setEmailsData();
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
      <CardHeader title="Emails" />
      <Divider />
      <CardContent>
        <TextField
          name="option"
          onChange={(event): void =>
            setEmailOption(event.target.value)
          }
          select
          SelectProps={{ native: true }}
          sx={{
            width: 320,
            maxWidth: "100%",
          }}
          value={emailOption}
        >
          {emailOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
        <Box sx={{ mt: 2 }}>
          <Button
            endIcon={<ArrowRightIcon fontSize="small" />}
            variant="contained"
          >
            Send email
          </Button>
        </Box>
      </CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mail Type</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emails.map((email) => (
            <TableRow
              key={email.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell>
                <Typography variant="subtitle2">
                  {email.description}
                </Typography>
              </TableCell>
              <TableCell>
                {format(email.createdAt, "dd/MM/yyyy | HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
