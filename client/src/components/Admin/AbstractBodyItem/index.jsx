import { Checkbox, ListItem, Box } from "@mui/material";

/**
 * @typedef {object} Props
 * @property {import("../AbstractDashboard").DashboardUiItem} ui
 * @property {()=>void} toggle
 * @property {JSX.Element} children
 *
 * @param {Props}
 */
const AbstractBodyItem = ({ ui, toggle, children }) => {
  return (
    <ListItem>
      <Checkbox checked={ui.isSelected} onChange={toggle} />
      <Box>{children}</Box>
    </ListItem>
  );
};

export default AbstractBodyItem;
