import { Button } from "@mui/material";
import AbstractToolBox from "../AbstractToolBox";
import deleteUser from "../../../lib/deleteUser";

/**
 * @typedef {import(".").UserProvided} Provided
 * @typedef {import("../../../hook/useUserDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const TicketToolBox = ({ hlr, provided }) => {
  const deleteItems = () => {
    if (provided.selected.length > 0) deleteUser(provided.selected);
  };

  return (
    <AbstractToolBox>
      <Button variant="contained" onClick={deleteItems}>
        삭제
      </Button>
    </AbstractToolBox>
  );
};

export default TicketToolBox;
