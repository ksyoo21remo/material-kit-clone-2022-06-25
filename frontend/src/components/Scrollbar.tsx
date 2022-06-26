import "simplebar/dist/simplebar.min.css";
import type { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { SxProps } from "@mui/system";
import React, { forwardRef } from "react";
import type { MutableRefObject } from "react";
import SimpleBar from "simplebar-react";

interface ScrollbarProps extends SimpleBar.Props {
  ref: MutableRefObject<SimpleBar>;
  sx?: SxProps<Theme>;
}

const ScrollbarRoot = styled(SimpleBar)``;

// eslint-disable-next-line
const Scrollbar = forwardRef<
  MutableRefObject<SimpleBar>,
  ScrollbarProps
>((props, ref) => {
  return (
    <ScrollbarRoot
      // @ts-ignore
      ref={ref}
      {...props}
    />
  );
});

export default Scrollbar;
