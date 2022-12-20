import { Button, Checkbox } from "@mui/material";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import useLogSearch from "../../../hook/useLogSearch";
import searchLog from "../../../lib/searchLog";
import AbstractSearch from "../AbstractSearch";
import { useEffect } from "react";

/**
 * @typedef {import(".").LogProvided} Provided
 * @typedef {import("../../../hook/useLogDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const LogSearch = ({ provided, hlr }) => {
  const { option, hlr: sh } = useLogSearch();

  useEffect(() => {
    hlr.setSearch(() => {
      searchLog(option).then((v) => {
        hlr.setAll(v);
      });
    });
  }, [option]);

  const [startPicker, endPicker] = usePeriod({
    isActive: option.isPeriod,
    start: option.startedAt,
    end: option.endAt,
    setEnd: sh.setEndPeriod,
    setStart: sh.setStartPeriod,
    changeActive: sh.togglePeriod,
  });

  return (
    <AbstractSearch
      colPair={[
        ["Method", useInput(option.method, sh.setMethod)],
        ["Caller", useInput(option.caller, sh.setCaller)],
        // ["Ip", useInput(option.ip, sh.setIp)],
        ["Path", useInput(option.path, sh.setPath)],
        ["Content", useInput(option.content, sh.setContent)],
        [
          "기간 검색",
          <div style={{ display: "flex" }}>
            {startPicker}&nbsp;{endPicker}
          </div>,
          { isActive: option.isPeriod, toggle: sh.togglePeriod },
        ],
      ]}
    />
  );
};

export default LogSearch;
