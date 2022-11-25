import { Box, Divider, Pagination } from "@mui/material";

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
 * @property {number} page
 * @property {number} pageLimit
 */
/**
 * @template T, K
 * @typedef {object} BaseHandler
 * @property {(selected: K[]) => void} setSelected
 * @property {(page: number) => void} fetchPage
 * @property {(page: number, limit: number, value: T[])=>void} setPage
 */

/**
 * @typedef {object} Props
 * @property { JSX.Element } Search
 * @property { JSX.Element } ToolBox
 * @property { JSX.Element } Body
 * @property {string} boardName
 * @property {BaseHandler<unknown, unknown>} hlr
 * @property {BaseProvided<unknown, unknown>} provided
 *
 * @typedef {object} DashboardUiItem
 * @property {boolean} isSelected
 *
 *
 */

/**
 * @type {React.FC<Props>}
 */
const AbstractDashboard = ({
  Search,
  ToolBox,
  Body,
  boardName,
  hlr,
  provided,
}) => {
  return (
    <Box>
      {/* <Typography>{boardName}</Typography> */}
      {Search}
      <Divider />
      {ToolBox}
      <Divider />
      {Body}
      <Divider />
      <Pagination
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        page={provided.page}
        onChange={(e, v) => hlr.fetchPage(v)}
        count={provided.pageLimit}
      />
    </Box>
  );
};

export default AbstractDashboard;
