import { useState } from "react";
import fetchToken from "../lib/fetchToken";

/**
 * @typedef {import("../components/Admin/TokenDashboard").IToken} Item
 * @typedef {import("../components/Admin/TokenDashboard").UiToken} UiItem
 * @typedef {import("../components/Admin/TokenDashboard").TokenProvided} Provided
 */

/**
 * @typedef {object} ChildHandler
 * @property {React.Dispatch<React.SetStateAction<Provided>>} setState
 * @property {(id: string, token: UiItem)=>void} set
 * @property {(iTokens: Item[])=>UiItem[]} transform
 * @property {(tokens: UiItem[]) => void} setAll
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
    return state.data.findIndex((l) => l.identifier === identifier);
  };
  const get = (index) => {
    return state.data[index];
  };

  /**
   * @type {Handler}
   */
  const hlr = {
    setState,
    setAll(tokens) {
      setState((prev) => ({
        ...prev,
        data: tokens,
      }));
    },
    transform(ITokens) {
      return ITokens.map((u) => ({ ...u, isSelected: false }));
    },
    set(id, token) {
      const idx = index(id);
      setState((prev) => ({
        ...prev,
        data: [
          ...prev.data.splice(0, idx),
          token,
          ...prev.data.splice(idx + 1),
        ],
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
      fetchToken(page).then((v) => {
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
  };

  return hlr;
}

/**
 *
 * @param {Provided} initialState
 * @returns
 */
export default function useTokenDashboard(
  initialState = {
    data: [],
    selected: [],
    page: 0,
    pageLimit: 0,
  }
) {
  const [state, setState] = useState(initialState);

  return {
    state,
    hlr: createHandle(state, setState),
  };
}
