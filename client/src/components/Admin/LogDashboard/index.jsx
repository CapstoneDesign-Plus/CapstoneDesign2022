import useLog from "../../../hook/useLog";
import AbstractDashboard from "../AbstractDashboard";
import useLogDashboard from "../../../hook/useLogDashboard";
import LogBody from "./LogBody";
import LogSearch from "./LogSearch";
import LogToolBox from "./LogToolBox";

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

  useLog((logs) => hlr.setAllLog(hlr.transform(logs)));

  return (
    <AbstractDashboard
      boardName="Log Dashboard"
      Search={<LogSearch provided={state} hlr={hlr} />}
      ToolBox={<LogToolBox provided={state} hlr={hlr} />}
      Body={<LogBody provided={state} hlr={hlr} />}
    />
  );
};

export default LogDashboard;
