import { Box, Button, Checkbox } from "@mui/material";
import useInput from "../../../hook/useInput";
import usePeriod from "../../../hook/usePeriod";
import useUserSearch from "../../../hook/useUserSearch";
import searchUser from "../../../lib/searchUser";

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

  const { checkBox, dataPicker } = usePeriod({
    isActive: option.isPeriod,
    start: option.startedAt,
    end: option.endAt,
    setEnd: sh.setEndPeriod,
    setStart: sh.setStartPeriod,
    changeActive: sh.togglePeriod,
  });

  return (
    <Box>
      <table>
        <tbody>
          <tr>
            <td>이메일</td>
            <td>{useInput(option.email, sh.setEmail)}</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>{useInput(option.nickName, sh.setNickName)}</td>
          </tr>
          <tr>
            <td>
              관리자{" "}
              <Checkbox checked={option.isAdmin} onChange={sh.toggleAdmin} />
            </td>
            <td>
              <Checkbox
                disabled={!option.isAdmin}
                checked={option.bvAdmin}
                onChange={sh.togglebvAdmin}
              />
            </td>
          </tr>
          <tr>
            <td>기간 검색 {checkBox}</td>
            <td>{dataPicker}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button onClick={search}>검색</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default UserSearch;
