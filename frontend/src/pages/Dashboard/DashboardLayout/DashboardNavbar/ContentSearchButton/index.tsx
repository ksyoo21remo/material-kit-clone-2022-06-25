import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import ContentSearchDialog from "./ContentSearchDialog";
import { Search as SearchIcon } from "../../../../../icons/Search";

export default function ContentSearchButton() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenSearchDialog = (): void => {
    setOpenDialog(true);
  };

  const handleCloseSearchDialog = (): void => {
    setOpenDialog(false);
  };

  return (
    <>
      <Tooltip title="Search">
        <IconButton onClick={handleOpenSearchDialog} sx={{ ml: 1 }}>
          <SearchIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <ContentSearchDialog
        onClose={handleCloseSearchDialog}
        open={openDialog}
      />
    </>
  );
}
