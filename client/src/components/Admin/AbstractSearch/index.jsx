import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";

const StyledTd = styled.td`
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const ToggleTr = ({ hlr, children }) => {
  if (typeof hlr === "undefined")
    return <StyledTd width={100}>{children}</StyledTd>;

  return (
    <StyledTd
      style={{
        cursor: "pointer",
        backgroundColor: hlr.isActive ? "" : "#aaa",
      }}
      onClick={hlr.toggle}
      width={100}
    >
      {children}
    </StyledTd>
  );
};

/**
 * @typedef {object} SearchProps
 * @property { [JSX.Element | string, JSX.Element, {toggle: ()=>void, isActive: boolean} | undefined][] } colPair
 *
 * @param {SearchProps}
 */

const AbstractSearch = ({ colPair }) => {
  return (
    <Box>
      <table
        style={{
          borderSpacing: "0px",
          margin: "15px 0px",
          border: "1px solid #999",
          width: "100%",
        }}
      >
        <tbody>
          {colPair.map((p, i) => (
            <tr key={i}>
              <ToggleTr hlr={p[2]}>{p[0]}</ToggleTr>
              <td style={{ padding: "1px", border: "1px solid #eee" }}>
                {p[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default AbstractSearch;
