import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id: orderId } = useParams();

  return (
    <>
      <Box>
        <Typography>{`Orders ${orderId}'s Details Page`}</Typography>
      </Box>
    </>
  );
}
