import AbstractDashboard from "../AbstractDashboard";
import useTokenDashboard from "../../../hook/useTokenDashboard";
import TokenBody from "./TokenBody";
import TokenSearch from "./TokenSearch";
import TokenToolBox from "./TokenToolBox";
import { useEffect } from "react";
import React from "react";

/**
 * @typedef {object} IToken
 * @property {number} identifier
 * @property {number} timestamp
 * @property {string} source
 * @property {string} content
 *
 * @typedef {IToken & import("../AbstractDashboard").DashboardUiItem} UiToken
 *
 * @typedef {unknown} ChildProvided
 *
 * @typedef {ChildProvided & import("../AbstractDashboard").BaseProvided<UiToken, number>} TokenProvided
 */

const TokenDashboard = () => {
  const { state, hlr } = useTokenDashboard();

  useEffect(() => {
    hlr.fetchPage(1);
  }, []);

  return (
    <AbstractDashboard
      provided={state}
      hlr={hlr}
      boardName="Token Dashboard"
      Search={<TokenSearch provided={state} hlr={hlr} />}
      ToolBox={<TokenToolBox provided={state} hlr={hlr} />}
      Body={<TokenBody provided={state} hlr={hlr} />}
    />
  );
};

export default TokenDashboard;
