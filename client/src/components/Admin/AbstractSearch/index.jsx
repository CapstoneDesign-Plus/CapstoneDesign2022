import styled from "@emotion/styled";
import React from "react";
import { Grid } from "@mui/material";

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

function makePair(value) {
  const pair = [];

  for (let i = 0, r = value.length; i < r; i += 2) {
    if (i + 1 < r) pair.push([value[i], value[i + 1]]);
    else pair.push([value[i]]);
  }
  return pair;
}

/**
 * @typedef {object} SearchProps
 * @property { [JSX.Element | string, JSX.Element, {toggle: ()=>void, isActive: boolean} | undefined][] } colPair
 * @property { JSX.Element } confirm
 *
 * @param {SearchProps}
 */

const AbstractSearch = ({ colPair, confirm }) => {
  const pair = makePair(colPair);

  return (
    <table
      style={{ borderSpacing: "0px", border: "1px solid #eee", width: "100%" }}
    >
      <tbody>
        {pair.map((p, i) => (
          <tr key={i}>
            {p.map((v, i) => (
              <React.Fragment key={i}>
                <ToggleTr hlr={v[2]}>{v[0]}</ToggleTr>
                <td>{v[1]}</td>
              </React.Fragment>
            ))}
          </tr>
        ))}
        <tr>
          <td></td>
          <td>{confirm}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AbstractSearch;
