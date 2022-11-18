import { Box } from "@mui/material";
import AbstractBodyItem from "../AbstractBodyItem";

/**
 * @typedef {import(".").UserProvided} UserProvided
 * @typedef {import("../../../hook/useUserDashboard").UserHandler} UserHandler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<UserProvided, UserHandler>}
 */
const UserBodyLeaf = ({ provided, hlr }) => {
  const toggle = (email) => () => hlr.toggleUser(email);

  return (
    <Box>
      {provided.data.map((u) => (
        <AbstractBodyItem ui={u} toggle={toggle(u.email)} key={u.email}>
          <div>{u.username}</div>
        </AbstractBodyItem>
      ))}
    </Box>
  );
};

export default UserBodyLeaf;
