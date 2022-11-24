import React, { useState } from "react";
import { useEffect } from "react";
import fetchDiet from "../../../lib/fetchDiet";
import changeDietShape from "../../../lib/changeDietShape";
import styled from "styled-components";

const TD = styled.td`
  border: 1px dashed #eee;
  text-align: center;
  padding: 8px;
`;

const DietView = ({ headerColor = "#fff", flag = 0 }) => {
  const [diet, setDiet] = useState();

  useEffect(() => {
    fetchDiet().then((v) => setDiet(changeDietShape(v)));
  }, [flag]);

  return (
    <table
      style={{
        border: "1px solid #ccc",
        borderSpacing: "0px",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: `${headerColor}` }}>
          <th>코너</th>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
        </tr>
      </thead>
      <tbody>
        {diet &&
          Object.keys(diet).map((k) => (
            <tr key={k}>
              <TD>{k}</TD>
              {diet[k].map((d, i) => {
                return (
                  <TD key={i}>
                    {d.map((v, i) => (
                      <React.Fragment key={i}>
                        <span>{v.replace("&amp;", "&")}</span>
                        <br />
                      </React.Fragment>
                    ))}
                  </TD>
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DietView;
