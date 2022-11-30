import { Button } from "@mui/material";
import AbstractToolBox from "../AbstractToolBox";
import deleteUser from "../../../lib/deleteUser";
import empowerUser from "../../../lib/empowerUser";

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

  const empower = (isEmpower) => () => {
    provided.selected.forEach((u) => {
      empowerUser(u, isEmpower);
    });
  };

  return (
    <AbstractToolBox>
      <Button
        variant="contained"
        sx={{ backgroundColor: "skyblue" }}
        onClick={empower(true)}
      >
        권한 부여
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "pink" }}
        onClick={empower(false)}
      >
        권한 제거
      </Button>
      <Button variant="contained" onClick={deleteItems}>
        삭제
      </Button>
    </AbstractToolBox>
  );
};

export default TicketToolBox;
