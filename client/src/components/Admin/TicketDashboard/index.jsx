import AbstractDashboard from "../AbstractDashboard";
import useTicketDashboard from "../../../hook/useTicketDashboard.jsx";
import Body from "./TicketBody";
import Search from "./TicketSearch";
import ToolBox from "./TicketToolBox";
import { useEffect } from "react";

/**
 * @typedef {object} ITicket
 * @property {string} identifier
 * @property {string} owner
 * @property {string} state
 * @property {number} price
 * @property {string} tclass
 * @property {string} buyer
 * @property {number} createdAt
 * @property {number} expiredAt
 * @property {number} usedAt
 *
 * @typedef {ITicket & import("../AbstractDashboard").DashboardUiItem} UiTicket
 *
 * @typedef {unknown} ChildProvided
 *
 * @typedef {ChildProvided & import("../AbstractDashboard").BaseProvided<UiTicket, string>} TicketProvided
 */

const TicketDashboard = () => {
  const { state, hlr } = useTicketDashboard();

  useEffect(() => {
    hlr.fetchPage(1);
  }, []);

  return (
    <AbstractDashboard
      provided={state}
      hlr={hlr}
      boardName="Ticket Dashboard"
      Search={<Search provided={state} hlr={hlr} />}
      ToolBox={<ToolBox provided={state} hlr={hlr} />}
      Body={<Body provided={state} hlr={hlr} />}
    />
  );
};

export default TicketDashboard;
