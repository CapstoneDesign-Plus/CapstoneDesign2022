import { Button, Checkbox } from "@mui/material";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import useTokenSearch from "../../../hook/useTokenSearch";
import searchToken from "../../../lib/searchToken";
import AbstractSearch from "../AbstractSearch";

/**
 * @typedef {import(".").TokenProvided} Provided
 * @typedef {import("../../../hook/useTokenDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const TokenSearch = ({ provided, hlr }) => {
  const { option, hlr: sh } = useTokenSearch();

  const search = () => {
    searchToken(option).then((v) => {
      hlr.setAll(v);
    });
  };

  const [createdStartPicker, createdEndPicker] = usePeriod({
    isActive: option.isCreatedPeriod,
    start: option.createdStartedAt,
    end: option.createdEndAt,
    setEnd: sh.setCreatedEndPeriod,
    setStart: sh.setCreatedStartPeriod,
    changeActive: sh.toggleCreatedPeriod,
  });

  const [expiredStartPicker, expiredEndPicker] = usePeriod({
    isActive: option.isExpiredPeriod,
    start: option.expiredStartedAt,
    end: option.expiredEndAt,
    setEnd: sh.setExpiredEndPeriod,
    setStart: sh.setExpiredStartPeriod,
    changeActive: sh.toggleExpiredPeriod,
  });

  return (
    <AbstractSearch
      colPair={[
        ["요청자", useInput(option.caller, sh.setEmail)],
        [
          "생성 기간",
          <div style={{ display: "flex" }}>
            {createdStartPicker}&nbsp;{createdEndPicker}
          </div>,
          { isActive: option.isCreatedPeriod, toggle: sh.toggleCreatedPeriod },
        ],
        [
          "만료 기간",
          <div style={{ display: "flex" }}>
            {expiredStartPicker}&nbsp;{expiredEndPicker}
          </div>,
          { isActive: option.isExpiredPeriod, toggle: sh.toggleExpiredPeriod },
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

export default TokenSearch;
