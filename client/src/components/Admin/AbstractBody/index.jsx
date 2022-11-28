import { lazy } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const AbstractBody = ({ getId, data, columns, setSelected }) => {
  return (
    <Box height={1000}>
      <DataGrid
        getRowId={getId}
        rows={data}
        columns={columns}
        // rowsPerPageOptions={[25]}
        checkboxSelection
        onSelectionModelChange={setSelected}
        // hideFooterPagination={true}
      />
    </Box>
  );
};

export default AbstractBody;
