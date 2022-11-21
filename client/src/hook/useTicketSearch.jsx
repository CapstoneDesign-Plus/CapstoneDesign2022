import React, { useState } from "react";

/**
 * @typedef {import("../lib/searchTicket").TicketSearchOption} Option
 *
 * @param {Option} option
 * @param {React.Dispatch<React.SetStateAction<Option>} setOption
 */
function createHandle(option, setOption) {
  return {
    setEmail(email) {
      setOption((prev) => ({
        ...prev,
        email,
        isEmail: email.length > 0,
      }));
    },
    togglebvAdmin() {
      setOption((prev) => ({ ...prev, bvAdmin: !prev.bvAdmin }));
    },
    toggleAdmin() {
      setOption((prev) => ({ ...prev, isAdmin: !prev.isAdmin }));
    },
    setNickName(nickName) {
      setOption((prev) => ({
        ...prev,
        nickName,
        isNickName: nickName.length > 0,
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

export default function useTicketSearch() {
  const [option, setOption] = useState({
    isEmail: false,
    isAdmin: false,
    isNickName: false,
    isPeriod: false,
    email: "",
    bvAdmin: false,
    nickName: "",
    startedAt: Date.now(),
    endAt: Date.now(),
  });

  return {
    option,
    hlr: createHandle(option, setOption),
  };
}
