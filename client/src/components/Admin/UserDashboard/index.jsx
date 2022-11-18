import useUser from "../../../hook/useUser";
import useUserDashboard from "../../../hook/useUserDashboard";
import AbstractDashboard from "../AbstractDashboard";
import UserBodyLeaf from "./UserBodyBoxLeaf";
import UserSearchLeaf from "./UserSearchLeaf";
import UserToolBoxLeaf from "./UserToolBoxLeaf";

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
 * @typedef {object} UserProvided
 * @property {UiUser[]} data
 */

const UserDashboard = () => {
  const { state, hlr } = useUserDashboard();

  useUser((users) => hlr.setAllUser(hlr.transform(users)));

  return (
    <AbstractDashboard
      boardName="User Dashboard"
      SearchLeaf={<UserSearchLeaf provided={state} hlr={hlr} />}
      ToolBoxLeaf={<UserToolBoxLeaf provided={state} hlr={hlr} />}
      BodyLeaf={<UserBodyLeaf provided={state} hlr={hlr} />}
    />
  );
};

export default UserDashboard;
