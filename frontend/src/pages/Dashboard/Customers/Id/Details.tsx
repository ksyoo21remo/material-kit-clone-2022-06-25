import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id: customerId } = useParams();

  return (
    <>
      <Box>
        <Typography>{`Customer ${customerId}'s Details Page`}</Typography>
      </Box>
    </>
  );
}
