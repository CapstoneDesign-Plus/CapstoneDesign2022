import { Button, Checkbox } from "@mui/material";
import { useEffect } from "react";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import useUserSearch from "../../../hook/useUserSearch";
import searchUser from "../../../lib/searchUser";
import AbstractSearch from "../AbstractSearch";

/**
 * @typedef {import(".").UserProvided} Provided
 * @typedef {import("../../../hook/useUserDashboard").Handler} Handler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<Provided, Handler>}
 */
const UserSearch = ({ provided, hlr }) => {
  const { option, hlr: sh } = useUserSearch();

  useEffect(() => {
    hlr.setSearch(() => {
      searchUser(option).then((v) => {
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
  });

  return (
    <AbstractSearch
      colPair={[
        ["이메일", useInput(option.email, sh.setEmail)],
        ["이름", useInput(option.nickName, sh.setNickName)],
        [
          "관리자",
          <Checkbox
            disabled={!option.isAdmin}
            checked={option.bvAdmin}
            onChange={sh.togglebvAdmin}
          />,
          {
            isActive: option.isAdmin,
            toggle: sh.toggleAdmin,
          },
        ],
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

export default UserSearch;
