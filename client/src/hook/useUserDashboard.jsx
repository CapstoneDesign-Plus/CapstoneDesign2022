import { useState } from "react";

/**
 * @typedef {import("../components/Admin/UserDashboard").IUser} IUser
 * @typedef {import("../components/Admin/UserDashboard").UiUser} UiUser
 * @typedef {import("../components/Admin/UserDashboard").UserProvided} UserProvided
 */

/**
 * @typedef {object} ChildHandler
 * @property {React.Dispatch<React.SetStateAction<UserProvided>>} setState
 * @property {(email: string, user: UiUser)=>void} setUser
 * @property {(iUsers: IUser[])=>UiUser[]} transform
 * @property {(users: UiUser[]) => void} setAllUser
 * @property {(emails: string[]) => UiUser[]} getSelected
 *
 * @typedef {ChildHandler & import("../components/Admin/AbstractDashboard").BaseHandler<unknown, string>} UserHandler
 *
 * @param {UserProvided} state
 * @param {React.Dispatch<React.SetStateAction<UserProvided>>} setState
 *
 * @returns {UserHandler}
 */
function createHandle(state, setState) {
  const indexUser = (email) => {
    return state.data.findIndex((u) => u.email === email);
  };
  const getUser = (index) => {
    return state.data[index];
  };

  /**
   * @type {UserHandler}
   */
  const hlr = {
    setState,
    setAllUser(users) {
      setState((prev) => ({
        ...prev,
        data: users,
      }));
    },
    transform(iUsers) {
      return iUsers.map((u) => ({ ...u, isSelected: false }));
    },
    setUser(email, user) {
      const idx = indexUser(email);
      setState((prev) => ({
        ...prev,
        data: [...prev.data.splice(0, idx), user, ...prev.data.splice(idx + 1)],
      }));
    },
    getSelected(emails) {
      return emails.reduce((acc, cur) => {
        let idx = indexUser(cur);
        if (idx !== -1) acc.push(getUser(idx));
        return acc;
      }, []);
    },
    setSelected(selected) {
      setState((prev) => ({
        ...prev,
        selected,
      }));
    },
  };

  return hlr;
}

/**
 *
 * @param {import("../components/Admin/UserDashboard").UserProvided} initialState
 * @returns
 */
export default function useUserDashboard(
  initialState = {
    data: [],
    selected: [],
  }
) {
  const [state, setState] = useState(initialState);

  return {
    state,
    hlr: createHandle(state, setState),
  };
}
