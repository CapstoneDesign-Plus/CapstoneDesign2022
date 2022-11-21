import { useState } from "react";

/**
 * @typedef {import("../components/Admin/LogDashboard").ILog} ILog
 * @typedef {import("../components/Admin/LogDashboard").UiLog} UiLog
 * @typedef {import("../components/Admin/LogDashboard").LogProvided} LogProvided
 */

/**
 * @typedef {object} ChildHandler
 * @property {React.Dispatch<React.SetStateAction<LogProvided>>} setState
 * @property {(id: string, log: UiLog)=>void} setLog
 * @property {(iLogs: ILog[])=>UiLog[]} transform
 * @property {(logs: UiLog[]) => void} setAllLog
 * @property {(id: string[]) => UiLog[]} getSelected
 *
 * @typedef {ChildHandler & import("../components/Admin/AbstractDashboard").BaseHandler<unknown, number>} LogHandler
 *
 * @param {LogProvided} state
 * @param {React.Dispatch<React.SetStateAction<LogProvided>>} setState
 *
 * @returns {LogHandler}
 */
function createHandle(state, setState) {
  const index = (id) => {
    return state.data.findIndex((l) => l.identifier === identifier);
  };
  const get = (index) => {
    return state.data[index];
  };

  /**
   * @type {LogHandler}
   */
  const hlr = {
    setState,
    setAllLog(logs) {
      setState((prev) => ({
        ...prev,
        data: logs,
      }));
    },
    transform(iLogs) {
      return iLogs.map((u) => ({ ...u, isSelected: false }));
    },
    setLog(id, log) {
      const idx = index(id);
      setState((prev) => ({
        ...prev,
        data: [...prev.data.splice(0, idx), log, ...prev.data.splice(idx + 1)],
      }));
    },
    getSelected(ids) {
      return ids.reduce((acc, cur) => {
        let idx = index(cur);
        if (idx !== -1) acc.push(get(idx));
        return acc;
      }, []);
    },
    setSelected(selected) {
      setState((prev) => ({
        ...prev,
        selected,
      }));
    },
  };

  return hlr;
}

/**
 *
 * @param {import("../components/Admin/LogDashboard").LogProvided} initialState
 * @returns
 */
export default function useLogDashboard(
  initialState = {
    data: [],
    selected: [],
  }
) {
  const [state, setState] = useState(initialState);

  return {
    state,
    hlr: createHandle(state, setState),
  };
}
