import React, { useState } from "react";
import { useEffect } from "react";
import fetchDiet from "../../../lib/fetchDiet";
import { Box } from "@mui/material";
import sortDiet from "../../../lib/sortDiet";
import changeDietShape from "../../../lib/changeDietShape";

const DietView = () => {
  const [diet, setDiet] = useState();

  useEffect(() => {
    fetchDiet().then((v) => setDiet(changeDietShape(v)));
  }, []);

  return (
    <table>
      <thead>
        <tr>
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
              <td>{k}</td>
              {diet[k].map((d, i) => {
                console.log(d);
                return (
                  <td key={i}>
                    {d.map((v, i) => (
                      <React.Fragment key={i}>
                        <span>{v.replace("&amp;", "&")}</span>
                        <br />
                      </React.Fragment>
                    ))}
                  </td>
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DietView;
