import React, { useState } from "react";

/**
 * @typedef {import("../lib/searchLog").LogSearchOption} Option
 *
 * @param {Option} option
 * @param {React.Dispatch<React.SetStateAction<Option>} setOption
 */
function createHandle(option, setOption) {
  return {
    setCaller(caller) {
      setOption((prev) => ({
        ...prev,
        caller,
        isCaller: caller.length > 0,
      }));
    },
    setPath(path) {
      setOption((prev) => ({
        ...prev,
        path,
        isPath: path.length > 0,
      }));
    },
    setMethod(method) {
      setOption((prev) => ({
        ...prev,
        method,
        isMethod: method.length > 0,
      }));
    },
    setIp(ip) {
      setOption((prev) => ({
        ...prev,
        ip,
        isIp: ip.length > 0,
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
    isPath: false,
    isIp: false,
    isCaller: false,
    isMethod: false,
    isPeriod: false,
    isContent: false,
    startedAt: Date.now(),
    endAt: Date.now(),
    content: "",
    ip: "",
    path: "",
    caller: "",
    method: "",
  });

  return {
    option,
    hlr: createHandle(option, setOption),
  };
}
