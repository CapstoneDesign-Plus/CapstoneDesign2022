import React, { useState } from "react";

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

export default function useNoticeWrite(
  initialValue = {
    header: "",
    content: "",
    title: "",
  }
) {
  const [state, setState] = useState(initialValue);

  return {
    state,
    hlr: createHandle(state, setState),
  };
}
