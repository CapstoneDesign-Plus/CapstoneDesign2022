import React, { useState } from "react";

/**
 * @typedef {import("../lib/searchToken").TokenSearchOption} Option
 *
 * @param {Option} option
 * @param {React.Dispatch<React.SetStateAction<Option>} setOption
 */
function createHandle(option, setOption) {
  return {
    setEmail(caller) {
      setOption((prev) => ({
        ...prev,
        caller,
        isCaller: caller.length > 0,
      }));
    },
    toggleCreatedPeriod() {
      setOption((prev) => ({
        ...prev,
        isCreatedPeriod: !prev.isCreatedPeriod,
      }));
    },
    toggleExpiredPeriod() {
      setOption((prev) => ({
        ...prev,
        isExpiredPeriod: !prev.isExpiredPeriod,
      }));
    },
    setCreatedStartPeriod(value) {
      setOption((prev) => ({
        ...prev,
        createdStartedAt: value,
      }));
    },
    setCreatedEndPeriod(value) {
      setOption((prev) => ({
        ...prev,
        createdEndAt: value,
      }));
    },
    setExpiredStartPeriod(value) {
      setOption((prev) => ({
        ...prev,
        expiredStartedAt: value,
      }));
    },
    setExpiredEndPeriod(value) {
      setOption((prev) => ({
        ...prev,
        expiredEndAt: value,
      }));
    },
  };
}

export default function useTokenSearch() {
  const [option, setOption] = useState({
    isCaller: false,
    isCreatedPeriod: false,
    isExpiredPeriod: false,
    expiredStartedAt: Date.now(),
    expiredEndAt: Date.now(),
    createdStartedAt: Date.now(),
    createdEndAt: Date.now(),
    caller: "",
  });

  return {
    option,
    hlr: createHandle(option, setOption),
  };
}
