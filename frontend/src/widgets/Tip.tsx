import { Box, styled, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface TipProps {
  message: string;
}

const TipRoot = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  padding: theme.spacing(1),
}));
// const TipRoot = styled(Box)(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? theme.palette.neutral![800]
//       : theme.palette.neutral![100],
//   borderRadius: theme.shape.borderRadius,
//   display: "flex",
//   padding: theme.spacing(1),
// }));

export default function Tip(props: PropsWithChildren<TipProps>) {
  const { message } = props;

  return (
    <TipRoot>
      <Typography
        color="textSecondary"
        sx={{
          "& span": {
            fontWeight: 700,
          },
        }}
        variant="caption"
      >
        <span>Tip.</span> {message}
      </Typography>
    </TipRoot>
  );
}
