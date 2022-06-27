import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id: invoiceId } = useParams();

  return (
    <>
      <Box>
        <Typography>{`invoice ${invoiceId}'s Details Page`}</Typography>
      </Box>
    </>
  );
}
