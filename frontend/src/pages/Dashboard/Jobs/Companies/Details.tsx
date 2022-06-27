import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id: companyId } = useParams();

  return (
    <>
      <Box>
        <Typography>{`Jobs Page > Company ${companyId}'s Details`}</Typography>
      </Box>
    </>
  );
}
