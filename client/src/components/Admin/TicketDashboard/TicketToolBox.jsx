import { Button } from "@mui/material";
import AbstractToolBox from "../AbstractToolBox";
import deleteTicket from "../../../lib/deleteTicket";

/**
 * @typedef {import(".").TicketProvided} Provided
 * @typedef {import("../../../hook/useTicketDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const TicketToolBox = ({ hlr, provided }) => {
  const deleteItems = () => {
    deleteTicket(provided.selected);
  };

  return (
    <AbstractToolBox>
      <Button onClick={deleteItems}>삭제</Button>
    </AbstractToolBox>
  );
};

export default TicketToolBox;
