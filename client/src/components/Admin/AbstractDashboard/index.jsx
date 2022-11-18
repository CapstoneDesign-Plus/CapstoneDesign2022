import { Box, Divider, Paper, Typography } from "@mui/material";

/**
 * @template T, S
 * @typedef {React.FC<{ provided: T, hlr: S}>} DashboardLeaf<T, S>
 */

/**
 * @typedef {object} Props
 * @property { JSX.Element } SearchLeaf
 * @property { JSX.Element } ToolBoxLeaf
 * @property { JSX.Element } BodyLeaf
 * @property {string} boardName
 *
 * @typedef {object} DashboardUiItem
 * @property {boolean} isSelected
 */

/**
 * @type {React.FC<Props>}
 */
const AbstractDashboard = ({
  SearchLeaf,
  ToolBoxLeaf,
  BodyLeaf,
  boardName,
}) => {
  return (
    <Box>
      <Typography>{boardName}</Typography>
      <Paper>{SearchLeaf}</Paper>
      <Divider />
      <Paper>{ToolBoxLeaf}</Paper>
      <Divider />
      <Paper>{BodyLeaf}</Paper>
    </Box>
  );
};

export default AbstractDashboard;
