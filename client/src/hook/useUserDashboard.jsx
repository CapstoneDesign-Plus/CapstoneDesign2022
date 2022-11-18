import { useState } from "react";

/**
 * @typedef {import("../components/Admin/UserDashboard").IUser} IUser
 * @typedef {import("../components/Admin/UserDashboard").UiUser} UiUser
 * @typedef {import("../components/Admin/UserDashboard").UserProvided} UserProvided
 */

/**
 * @typedef {object} UserHandler
 * @property {React.Dispatch<React.SetStateAction<UserProvided>>} setState
 * @property {(email: string, user: UiUser)=>void} setUser
 * @property {(iUsers: IUser[])=>UiUser[]} transform
 * @property {(users: UiUser[]) => void} setAllUser
 * @property {(email: string) => void} toggleUser
 * @property {() => UiUser[]} getSelected
 *
 *
 *
 * @param {} state
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
    toggleUser(email) {
      const user = getUser(indexUser(email));

      hlr.setUser(email, { ...user, isSelected: !user.isSelected });
    },
    getSelected() {
      return state.data.filter((u) => u.isSelected);
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
  }
) {
  const [state, setState] = useState(initialState);

  return {
    state,
    hlr: createHandle(state, setState),
  };
}
