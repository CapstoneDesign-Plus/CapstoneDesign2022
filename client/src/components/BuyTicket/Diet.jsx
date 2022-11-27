import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import style from "../../style/buyticket.scss";
import fetchDiet from "../../lib/fetchDiet";
import changeDietShape from "../../lib/changeDietShape";
import getToday from "../../lib/getToday";
import NoneDiet from "./NoneDiet";
import BuyTicket from "./BuyTicket";

export default function Diet() {
  //const [diet, setDiet] = useState([]);
  const [dietA, setDietA] = useState([]);
  const [dietB, setDietB] = useState([]);
  const [dietC, setDietC] = useState([]);

  useEffect(() => {
    fetchDiet().then((v) => {
      const today = getToday();
      //setDiet(changeDietShape(v));
      //setDiet(changeDietShape(v).a[today > -1 ? today : 0]);
      setDietA(changeDietShape(v).a[today > -1 ? today : 0]);
      setDietB(changeDietShape(v).b[today > -1 ? today : 0]);
      setDietC(changeDietShape(v).c[today > -1 ? today : 0]);
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
      <div>
        {
          <div>
            {dietA && dietA.length > 0 ? (
              <BuyTicket dA={dietA} dB={dietB} dC={dietC} />
            ) : (
              <NoneDiet />
            )}
          </div>
        }
      </div>
    </div>
  );
}
