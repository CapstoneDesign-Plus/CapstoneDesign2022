import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import style from "../../style/buyticket.scss";
import fetchDiet from "../../lib/fetchDiet";
import changeDietShape from "../../lib/changeDietShape";
import getToday from "../../lib/getToday";
import NoneDiet from "./NoneDiet";

export default function Diet() {
  const [today, setToday] = useState(-1);
  let diet = [];

  useEffect(() => {
    fetchDiet().then((v) => {
      setToday(getToday());
      today > -1 ? (diet = changeDietShape(v).a[today]) : (diet = null); // 식단 없슴니다 띄우기
      console.log(diet);
    });
  });

  return (
    <div style={{ margin: 0 }}>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        식권 구매
      </Box>
      <div>{diet && diet.length > 0 ? <BuyTicket /> : <NoneDiet />}</div>
    </div>
  );
}
