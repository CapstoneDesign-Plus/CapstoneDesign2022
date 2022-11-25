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
    if (provided.selected.length > 0) deleteTicket(provided.selected);
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
