import { useEffect } from "react";
import fetchUser from "../lib/fetchUser";
/**
 * @typedef {(users: import("../components/Admin/UserDashboard").IUser[]) => void} UsersSetter
 *
 * @param {UsersSetter} setter
 */
export default function useUser(setter) {
  useEffect(() => {
    fetchUser().then(setter);
  }, []);
}
