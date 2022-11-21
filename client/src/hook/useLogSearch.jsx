import React, { useState } from "react";

/**
 * @typedef {import("../lib/searchLog").LogSearchOption} Option
 *
 * @param {Option} option
 * @param {React.Dispatch<React.SetStateAction<Option>} setOption
 */
function createHandle(option, setOption) {
  return {
    setSource(source) {
      setOption((prev) => ({
        ...prev,
        source,
        isSource: source.length > 0,
      }));
    },
    setContent(content) {
      setOption((prev) => ({
        ...prev,
        content,
        isContent: content.length > 0,
      }));
    },
    togglePeriod() {
      setOption((prev) => ({
        ...prev,
        isPeriod: !prev.isPeriod,
      }));
    },
    setStartPeriod(value) {
      setOption((prev) => ({
        ...prev,
        startedAt: value,
      }));
    },
    setEndPeriod(value) {
      setOption((prev) => ({
        ...prev,
        endAt: value,
      }));
    },
  };
}

export default function useLogSearch() {
  const [option, setOption] = useState({
    isSource: false,
    isPeriod: false,
    isContent: false,
    startedAt: Date.now(),
    endAt: Date.now(),
    source: "",
    content: "",
  });

  return {
    option,
    hlr: createHandle(option, setOption),
  };
}
