import { Box, Button, Stack } from "@mui/material";
import React from "react";

const AbstractToolBox = ({ children, provided, hlr }) => {
  return (
    <Stack direction="row" justifyContent="flex-end" spacing={1}>
      {children}
      <Button variant="contained" onClick={provided.search}>
        검색
      </Button>
    </Stack>
  );
};

export default AbstractToolBox;
