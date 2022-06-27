import {
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomerLog } from "../../../types";
import SeverityPill from "../../../../../../components/SeverityPill";
import Scrollbar from "../../../../../../components/Scrollbar";
import { DotsHorizontal as DotsHorizontalIcon } from "../../../../../../icons/DotsHorizontal";
import { format } from "date-fns";
import { customerApi } from "../../../../../../__fake-api__/customerApi";

export default function LogsTab() {
  const [logs, setLogs] = useState<CustomerLog[]>([]);

  useEffect(() => {
    async function setLogsData() {
      const data = await customerApi.getCustomerLogs();
      setLogs(data);
    }
    setLogsData();
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
        title="Recent Logs"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell width="100">
                  <Typography color="textSecondary" variant="caption">
                    {log.method}
                  </Typography>
                </TableCell>
                <TableCell width="64">
                  <SeverityPill
                    color={
                      log.status >= 200 && log.status < 300
                        ? "success"
                        : "error"
                    }
                  >
                    {log.status}
                  </SeverityPill>
                </TableCell>
                <TableCell>{log.route}</TableCell>
                <TableCell>{log.description}</TableCell>
                <TableCell>{log.ip}</TableCell>
                <TableCell>
                  {format(log.createdAt, "yyyy/MM/dd HH:mm:ss")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
}
