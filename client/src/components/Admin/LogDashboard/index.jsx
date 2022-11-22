import useLog from "../../../hook/useLog";
import AbstractDashboard from "../AbstractDashboard";
import useLogDashboard from "../../../hook/useLogDashboard";
import LogBody from "./LogBody";
import LogSearch from "./LogSearch";
import LogToolBox from "./LogToolBox";
import { useEffect } from "react";

/**
 * @typedef {object} ILog
 * @property {number} identifier
 * @property {number} timestamp
 * @property {string} source
 * @property {string} content
 *
 * @typedef {ILog & import("../AbstractDashboard").DashboardUiItem} UiLog
 *
 * @typedef {unknown} ChildProvided
 *
 * @typedef {ChildProvided & import("../AbstractDashboard").BaseProvided<UiLog, string>} LogProvided
 */

const LogDashboard = () => {
  const { state, hlr } = useLogDashboard();

  useEffect(() => {
    hlr.fetchPage(1);
  }, []);

  return (
    <AbstractDashboard
      provided={state}
      hlr={hlr}
      boardName="Log Dashboard"
      Search={<LogSearch provided={state} hlr={hlr} />}
      ToolBox={<LogToolBox provided={state} hlr={hlr} />}
      Body={<LogBody provided={state} hlr={hlr} />}
    />
  );
};

export default LogDashboard;
