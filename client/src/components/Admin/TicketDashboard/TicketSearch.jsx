import { Button, Checkbox } from "@mui/material";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import AbstractSearch from "../AbstractSearch";
import searchTicket from "../../../lib/searchTicket";
import useTicketSearch from "../../../hook/useTicketSearch";

/**
 * @typedef {import(".").LogProvided} Provided
 * @typedef {import("../../../hook/useLogDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const TicketSearch = ({ provided, hlr }) => {
  const { option, hlr: sh } = useTicketSearch();

  const search = () => {
    searchTicket(option).then((v) => {
      hlr.setAll(v);
    });
  };

  const [createdStartPicker, createdEndPicker] = usePeriod({
    isActive: option.isPeriod,
    start: option.startedAt,
    end: option.endAt,
    setEnd: sh.setEndPeriod,
    setStart: sh.setStartPeriod,
    changeActive: sh.togglePeriod,
  });

  const [usedStartPicker, usedEndPicker] = usePeriod({
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
        ["구매자", useInput(option.buyer, sh.setBuyer)],
        ["소유자", useInput(option.owner, sh.setOwner)],
        ["코스", useInput(option.tClass, sh.setClass)],
        [
          "생성 기간",
          <div style={{ display: "flex" }}>
            {createdStartPicker}&nbsp;{createdEndPicker}
          </div>,
          { isActive: option.isCreatedPeriod, toggle: sh.toggleCreatedPeriod },
        ],
        [
          "사용 기간",
          <div style={{ display: "flex" }}>
            {usedStartPicker}&nbsp;{usedEndPicker}
          </div>,
          { isActive: option.isUsedPeriod, toggle: sh.toggleUsedPeriod },
        ],
        [
          "가격",
          <div style={{ display: "flex" }}>
            {useInput(option.startedPrice, sh.setPriceStart, 1)}&nbsp;
            {useInput(option.endPrice, sh.setPriceEnd, 1)}
          </div>,
          { isActive: option.isPrice, toggle: sh.togglePrice },
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

export default TicketSearch;
