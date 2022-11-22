import { useEffect } from "react";
import useUserDashboard from "../../../hook/useUserDashboard";
import AbstractDashboard from "../AbstractDashboard";
import UserBody from "./UserBody";
import UserSearch from "./UserSearch";
import UserToolBox from "./UserToolBox";

/**
 * @typedef {object} IUser
 * @property {string} email
 * @property {string[]} tickets
 * @property {number} point
 * @property {number} uclass
 * @property {boolean} admin
 * @property {string} username
 * @property {number} createAt
 *
 * @typedef {IUser & import("../AbstractDashboard").DashboardUiItem} UiUser
 *
 * @typedef {unknown} ChildProvided
 *
 * @typedef {ChildProvided & import("../AbstractDashboard").BaseProvided<UiUser, string>} UserProvided
 */

const UserDashboard = () => {
  const { state, hlr } = useUserDashboard();

  useEffect(() => {
    hlr.fetchPage(1);
  }, []);

  return (
    <AbstractDashboard
      provided={state}
      hlr={hlr}
      boardName="User Dashboard"
      Search={<UserSearch provided={state} hlr={hlr} />}
      ToolBox={<UserToolBox provided={state} hlr={hlr} />}
      Body={<UserBody provided={state} hlr={hlr} />}
    />
  );
};

export default UserDashboard;
