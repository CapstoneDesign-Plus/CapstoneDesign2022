import { Box, Divider, Paper, Typography } from "@mui/material";

/**
 * @template T, S
 * @typedef {React.FC<{ provided: T, hlr: S}>} DashboardLeaf
 *
 */
/**
 * @template T, K
 * @typedef {object} BaseProvided
 * @property {K[]} selected
 * @property {T[]} data
 */
/**
 * @template T, K
 * @typedef {object} BaseHandler
 * @property {(selected: K[]) => void} setSelected
 */

/**
 * @typedef {object} Props
 * @property { JSX.Element } Search
 * @property { JSX.Element } ToolBox
 * @property { JSX.Element } Body
 * @property {string} boardName
 *
 * @typedef {object} DashboardUiItem
 * @property {boolean} isSelected
 *
 *
 */

/**
 * @type {React.FC<Props>}
 */
const AbstractDashboard = ({ Search, ToolBox, Body, boardName }) => {
  return (
    <Box>
      <Typography>{boardName}</Typography>
      {Search}
      <Divider />
      {ToolBox}
      <Divider />
      {Body}
    </Box>
  );
};

export default AbstractDashboard;
