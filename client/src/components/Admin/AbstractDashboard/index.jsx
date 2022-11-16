import { Box, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";

/**
 * @template T
 * @typedef {object} Props<T>
 * @property { DashboardLeaf<T> } SearchLeaf
 * @property { DashboardLeaf<T> } ToolBoxLeaf
 * @property { DashboardLeaf<T> } BodyLeaf
 * @property {string} boardName
 * @property {T} initialState
 */

/**
 * @template T
 * @typedef {React.FC<{ provided: T, setProvided: React.Dispatch<React.SetStateAction<T>>}>} DashboardLeaf<T>
 */

/**
 * @template T
 * @typedef {React.FC<Props<T>>} IAbstractDashboard<T>
 */

/**
 * @template T
 * @type {IAbstractDashboard<T>}
 */
const AbstractDashboard = ({
  SearchLeaf,
  ToolBoxLeaf,
  BodyLeaf,
  boardName,
  initialState,
}) => {
  const [provided, setProvided] = useState(initialState);

  return (
    <Box>
      <Typography>{boardName}</Typography>
      <Paper>
        {SearchLeaf && (
          <SearchLeaf provided={provided} setProvided={setProvided} />
        )}
      </Paper>
      <Divider />
      <Paper>
        {ToolBoxLeaf && (
          <ToolBoxLeaf provided={provided} setProvided={setProvided} />
        )}
      </Paper>
      <Divider />
      <Paper>
        {BodyLeaf && <BodyLeaf provided={provided} setProvided={setProvided} />}
      </Paper>
    </Box>
  );
};

export default AbstractDashboard;
