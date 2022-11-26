import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import style from "../../style/buyticket.scss";
import fetchDiet from "../../lib/fetchDiet";
import changeDietShape from "../../lib/changeDietShape";
import getToday from "../../lib/getToday";
import NoneDiet from "./NoneDiet";
import BuyTicket from "./BuyTicket";

export default function Diet() {
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    fetchDiet().then((v) => {
      const today = getToday();
      //today > -1 ? (diet = changeDietShape(v).a[today]) : (diet = null); // 식단 없슴니다 띄우기
      setDiet(changeDietShape(v).a[today > -1 ? today : 0]);
    });
  }, []);

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
