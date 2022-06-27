import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id: postId } = useParams();

  return (
    <>
      <Box>
        <Typography>{`Blog Post ${postId}'s Details Page`}</Typography>
      </Box>
    </>
  );
}
