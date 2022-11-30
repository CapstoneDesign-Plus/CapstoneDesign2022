import { useState } from "react";
import fetchTicket from "../lib/fetchTicket";

/**
 * @typedef {import("../components/Admin/TicketDashboard").ITicket} Item
 * @typedef {import("../components/Admin/TicketDashboard").UiTicket} UiItem
 * @typedef {import("../components/Admin/TicketDashboard").TicketProvided} Provided
 */

/**
 * @typedef {object} ChildHandler
 * @property {React.Dispatch<React.SetStateAction<Provided>>} setState
 * @property {(id: string, log: UiItem)=>void} set
 * @property {(iLogs: Item[])=>UiItem[]} transform
 * @property {(logs: UiItem[]) => void} setAll
 * @property {(id: string[]) => UiItem[]} getSelected
 *
 * @typedef {ChildHandler & import("../components/Admin/AbstractDashboard").BaseHandler<Item, number>} Handler
 *
 * @param {Provided} state
 * @param {React.Dispatch<React.SetStateAction<Provided>>} setState
 *
 * @returns {Handler}
 */
function createHandle(state, setState) {
  const index = (id) => {
    return state.data.findIndex((l) => l.identifier === id);
  };
  const get = (index) => {
    return state.data[index];
  };

  /**
   * @type {Handler}
   */
  const hlr = {
    setState,
    setAll(logs) {
      setState((prev) => ({
        ...prev,
        data: logs,
      }));
    },
    transform(iLogs) {
      return iLogs.map((u) => ({ ...u, isSelected: false }));
    },
    set(id, log) {
      const idx = index(id);
      setState((prev) => ({
        ...prev,
        data: [...prev.data.splice(0, idx), log, ...prev.data.splice(idx + 1)],
      }));
    },
    getSelected(ids) {
      return ids.reduce((acc, cur) => {
        let idx = index(cur);
        if (idx !== -1) acc.push(get(idx));
        return acc;
      }, []);
    },
    setSelected(selected) {
      setState((prev) => ({
        ...prev,
        selected,
      }));
    },
    fetchPage(page) {
      fetchTicket(page).then((v) => {
        if (v) {
          hlr.setPage(
            v.currentPage,
            Math.ceil(v.totalCount / v.countPerPage),
            v.values
          );
        }
      });
    },
    setPage(page, limit, values) {
      setState((prev) => ({
        ...prev,
        page,
        pageLimit: limit,
        data: hlr.transform(values),
      }));
    },
    setSearch(search) {
      setState((prev) => ({
        ...prev,
        search,
      }));
    },
  };

  return hlr;
}

/**
 *
 * @param {Provided} initialState
 * @returns
 */
export default function useTicketDashboard(
  initialState = {
    data: [],
    selected: [],
    page: 0,
    search: () => {},
  }
) {
  const [state, setState] = useState(initialState);

  return {
    state,
    hlr: createHandle(state, setState),
  };
}
