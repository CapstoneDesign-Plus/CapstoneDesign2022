import { Box } from "@mui/material";
import React from "react";

const AbstractToolBox = ({ children }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>{children}</Box>
  );
};

export default AbstractToolBox;
