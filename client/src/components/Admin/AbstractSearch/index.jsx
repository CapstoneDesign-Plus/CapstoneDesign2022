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
      style={
        hlr.isActive
          ? { cursor: "pointer" }
          : { cursor: "pointer", backgroundColor: "#eee" }
      }
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
 * @property { JSX.Element } confirm
 *
 * @param {SearchProps}
 */

const AbstractSearch = ({ colPair, confirm }) => {
  return (
    <Box>
      <table
        style={{
          borderSpacing: "0px",
          border: "1px solid #eee",
          width: "100%",
        }}
      >
        <tbody>
          {colPair.map((p, i) => (
            <tr key={i}>
              <ToggleTr hlr={p[2]}>{p[0]}</ToggleTr>
              <td>{p[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {confirm}
      </div>
    </Box>
  );
};

export default AbstractSearch;
