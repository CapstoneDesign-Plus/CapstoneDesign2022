import React, { useEffect, useState } from "react";
import fetchNotice from "../lib/fetchNotice";

/**
 *
 * @typedef {object} Data
 * @property {string} title
 * @property {string} header
 * @property {string} content
 *
 * @param {Data} state
 * @param {React.Dispatch<React.SetStateAction<Data>>} setState
 */
function createHandle(state, setState) {
  return {
    setHeader(value) {
      setState((prev) => ({
        ...prev,
        header: value,
      }));
    },
    setContent(value) {
      setState((prev) => ({
        ...prev,
        content: value,
      }));
    },
    setTitle(value) {
      setState((prev) => ({
        ...prev,
        title: value,
      }));
    },
  };
}

export default function useNoticeWrite(id) {
  const [state, setState] = useState({
    header: "",
    content: "",
    title: "",
  });

  useEffect(() => {
    if (id) {
      fetchNotice(id).then((v) => setState(v));
    }
  }, []);

  return {
    state,
    hlr: createHandle(state, setState),
  };
}
