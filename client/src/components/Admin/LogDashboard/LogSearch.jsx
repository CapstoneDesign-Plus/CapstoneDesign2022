import { Button, Checkbox } from "@mui/material";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import useLogSearch from "../../../hook/useLogSearch";
import searchLog from "../../../lib/searchLog";
import AbstractSearch from "../AbstractSearch";

/**
 * @typedef {import(".").LogProvided} LogProvided
 * @typedef {import("../../../hook/useLogDashboard").LogHandler} LogHandler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<LogProvided, LogHandler>}
 */
const LogSearch = ({ provided, hlr }) => {
  const { option, hlr: sh } = useLogSearch();

  const search = () => {
    searchLog(option).then((v) => {
      hlr.setAllLog(v);
    });
  };

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
        ["Source", useInput(option.source, sh.setSource)],
        ["Content", useInput(option.content, sh.setContent)],
        [
          "기간 검색",
          <div style={{ display: "flex" }}>
            {startPicker}&nbsp;{endPicker}
          </div>,
          { isActive: option.isPeriod, toggle: sh.togglePeriod },
        ],
      ]}
      confirm={
        <Button onClick={search} variant="contained">
          검색
        </Button>
      }
    />
  );
};

export default LogSearch;
