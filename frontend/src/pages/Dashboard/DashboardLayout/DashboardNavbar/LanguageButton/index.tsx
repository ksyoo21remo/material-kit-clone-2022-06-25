import { Box, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguagePopover from "./LanguagePopover";
import { Language, languages } from "./languages";

export default function LanguageButton() {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const { i18n } = useTranslation();
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  const handleOpenPopover = (): void => {
    setOpenPopover(true);
  };

  const handleClosePopover = (): void => {
    setOpenPopover(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        ref={anchorRef}
        sx={{ ml: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            height: 20,
            width: 20,
            "& img": {
              width: "100%",
            },
          }}
        >
          <img alt="" src={languages[i18n.language as Language]} />
        </Box>
      </IconButton>
      <LanguagePopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        open={openPopover}
      />
    </>
  );
}
