import AbstractDashboard from "../AbstractDashboard";
import UserBodyLeaf from "./UserBodyBoxLeaf";
import UserSearchLeaf from "./UserSearchLeaf";
import UserToolBoxLeaf from "./UserToolBoxLeaf";

/**
 * @typedef {object} UserProvided
 * @property {string} value
 */

const UserDashboard = () => {
  /**
   * @type {UserProvided}
   */
  const initialState = { value: "hello" };

  return (
    <AbstractDashboard
      boardName="User Dashboard"
      SearchLeaf={UserSearchLeaf}
      ToolBoxLeaf={UserToolBoxLeaf}
      BodyLeaf={UserBodyLeaf}
      initialState={initialState}
    />
  );
};

export default UserDashboard;
