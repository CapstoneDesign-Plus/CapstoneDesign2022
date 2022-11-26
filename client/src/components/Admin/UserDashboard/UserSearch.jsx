import { Button, Checkbox } from "@mui/material";
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

  const search = () => {
    searchUser(option).then((v) => {
      hlr.setAll(v);
    });
  };

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
      confirm={
        <Button onClick={search} variant="contained">
          검색
        </Button>
      }
    />
  );
};

export default UserSearch;
