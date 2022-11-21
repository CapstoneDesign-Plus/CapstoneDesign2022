import { useEffect } from "react";
import fetchLog from "../lib/fetchLog";
/**
 * @typedef {(logs: import("../components/Admin/LogDashboard").ILog[]) => void} LogSetter
 *
 * @param {LogSetter} setter
 */
export default function useLog(setter) {
  useEffect(() => {
    fetchLog().then(setter);
  }, []);
}
