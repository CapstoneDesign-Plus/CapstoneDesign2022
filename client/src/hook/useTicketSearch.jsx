import React, { useState } from "react";

/**
 * @typedef {import("../lib/searchTicket").TicketSearchOption} Option
 *
 * @param {Option} option
 * @param {React.Dispatch<React.SetStateAction<Option>} setOption
 */
function createHandle(option, setOption) {
  return {
    setBuyer(buyer) {
      setOption((prev) => ({
        ...prev,
        buyer,
        isBuyer: buyer.length > 0,
      }));
    },
    setState(state) {
      setOption((prev) => ({
        ...prev,
        state,
        isState: state.length > 0,
      }));
    },
    setOwner(owner) {
      setOption((prev) => ({
        ...prev,
        owner,
        isOwner: owner.length > 0,
      }));
    },
    setClass(tClass) {
      setOption((prev) => ({
        ...prev,
        tClass,
        isTClass: tClass.length === 1,
      }));
    },
    togglePrice() {
      setOption((prev) => ({ ...prev, isPrice: !prev.isPrice }));
    },
    toggleCreatedPeriod() {
      setOption((prev) => ({
        ...prev,
        isCreatedPeriod: !prev.isCreatedPeriod,
      }));
    },
    toggleUsedPeriod() {
      setOption((prev) => ({ ...prev, isUsedPeriod: !prev.isUsedPeriod }));
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
    setUsedStartPeriod(value) {
      setOption((prev) => ({
        ...prev,
        usedStartedAt: value,
      }));
    },
    setUsedEndPeriod(value) {
      setOption((prev) => ({
        ...prev,
        usedEndAt: value,
      }));
    },
    setPriceStart(value) {
      setOption((prev) => ({
        ...prev,
        startedPrice: value,
      }));
    },
    setPriceEnd(value) {
      setOption((prev) => ({
        ...prev,
        endPrice: value,
      }));
    },
  };
}

export default function useTicketSearch() {
  const [option, setOption] = useState({
    isTClass: false,
    isPrice: false,
    isBuyer: false,
    isOwner: false,
    isState: false,
    isCreatedPeriod: false,
    isUsedPeriod: false,
    tClass: "",
    owner: "",
    buyer: "",
    createdStartedAt: Date.now(),
    createdEndAt: Date.now(),
    usedStartedAt: Date.now(),
    usedEndAt: Date.now(),
    startedPrice: 0,
    state: "",
    endPrice: 0,
  });

  return {
    option,
    hlr: createHandle(option, setOption),
  };
}
