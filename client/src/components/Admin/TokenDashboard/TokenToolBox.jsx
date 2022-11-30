import { Button } from "@mui/material";
import AbstractToolBox from "../AbstractToolBox";
import deleteToken from "../../../lib/deleteToken";

/**
 * @typedef {import(".").TokenProvided} Provided
 * @typedef {import("../../../hook/useTokenDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const TicketToolBox = ({ hlr, provided }) => {
  const deleteItems = () => {
    if (provided.selected.length > 0) deleteToken(provided.selected);
  };

  return (
    <AbstractToolBox provided={provided} hlr={hlr}>
      <Button variant="contained" onClick={deleteItems}>
        삭제
      </Button>
    </AbstractToolBox>
  );
};

export default TicketToolBox;
