import { Button, Checkbox } from "@mui/material";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import AbstractSearch from "../AbstractSearch";
import searchTicket from "../../../lib/searchTicket";
import useTicketSearch from "../../../hook/useTicketSearch";
import { useEffect } from "react";

/**
 * @typedef {import(".").TicketProvided} Provided
 * @typedef {import("../../../hook/useTicketDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const TicketSearch = ({ provided, hlr }) => {
  const { option, hlr: sh } = useTicketSearch();

  useEffect(() => {
    hlr.setSearch(() => {
      searchTicket(option).then((v) => {
        hlr.setAll(v);
      });
    });
  }, [option]);

  const [createdStartPicker, createdEndPicker] = usePeriod({
    isActive: option.isCreatedPeriod,
    start: option.createdStartedAt,
    end: option.createdStartedAt,
    setEnd: sh.setCreatedEndPeriod,
    setStart: sh.setCreatedStartPeriod,
  });

  const [usedStartPicker, usedEndPicker] = usePeriod({
    isActive: option.isUsedPeriod,
    start: option.usedStartedAt,
    end: option.usedEndAt,
    setEnd: sh.setUsedEndPeriod,
    setStart: sh.setUsedStartPeriod,
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
            {useInput(option.startedPrice, sh.setPriceStart, 1)}&nbsp;~&nbsp;
            {useInput(option.endPrice, sh.setPriceEnd, 1)}
          </div>,
          { isActive: option.isPrice, toggle: sh.togglePrice },
        ],
      ]}
    />
  );
};

export default TicketSearch;
