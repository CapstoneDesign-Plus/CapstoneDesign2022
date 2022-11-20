import { Button, Checkbox } from "@mui/material";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import useUserSearch from "../../../hook/useUserSearch";
import searchUser from "../../../lib/searchUser";
import AbstractSearch from "../AbstractSearch";

/**
 * @typedef {import(".").UserProvided} UserProvided
 * @typedef {import("../../../hook/useUserDashboard").UserHandler} UserHandler
 *
 * @type {import("../AbstractDashboard").DashboardLeaf<UserProvided, UserHandler>}
 */
const UserSearch = ({ provided, hlr }) => {
  const { option, hlr: sh } = useUserSearch();

  const search = () => {
    searchUser(option).then((v) => {
      hlr.setAllUser(v);
    });
  };

  const datePicker = usePeriod({
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
        ["이메일", useInput(option.email, sh.setEmail)],
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
        ["이름", useInput(option.nickName, sh.setNickName)],
        [
          "기간 검색",
          datePicker,
          { isActive: option.isPeriod, toggle: sh.togglePeriod },
        ],
      ]}
      confirm={<Button onClick={search}>검색</Button>}
    />
  );
};

export default UserSearch;
