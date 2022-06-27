import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { id: customerId } = useParams();

  return (
    <>
      <Box>
        <Typography>{`Customer ${customerId}'s Edit Page`}</Typography>
      </Box>
    </>
  );
}
