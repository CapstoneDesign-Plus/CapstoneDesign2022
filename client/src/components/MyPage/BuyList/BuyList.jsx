import styled from "styled-components";
import React from "react";
import { Box, Button } from "@mui/material";
import {Link} from "react-router-dom";

const BuyListStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  width: 475px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 18px;
  }

  .btn {
    color: #49663c;
    width: 420px;
    height: 80px;
    font-weight: bold;
    font-size: 32px;
    border-radius: 20px;
  }

  .btnBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function BuyList() {
  return (
    <BuyListStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        마이페이지 {">"} 구매내역
      </Box>
      <Box className="btnBox" sx={{ mt: 6 }}>
        <Link to="/BuyList/Used">
          <Button className="btn" variant="contained">
            사용한 식권 보기
          </Button>
        </Link>
      </Box>
      <Box className="btnBox" sx={{ mt: 3 }}>
        <Link to="/BuyList/UnUsed">
          <Button className="btn" variant="contained">
            미사용한 식권 보기
          </Button>
        </Link>
      </Box>
    </BuyListStyle>
  );
}

export default BuyList;
