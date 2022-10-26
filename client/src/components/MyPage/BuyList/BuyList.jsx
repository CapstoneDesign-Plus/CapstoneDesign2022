import styled from "styled-components";
import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const BuyListStyle = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bolder;
  color: #000000;

  .title {
    font-size: 20px;
    align-self: flex-start;
  }

  .btn {
    color: #49663c;
    width: 100%;
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
      <Box className="btnBox" sx={{ margin: "auto", mt: 6, ml: 3, mr: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Link to="/BuyList/Used">
              <Button className="btn" variant="contained">
                사용한 식권 보기
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Link to="/BuyList/UnUsed">
              <Button className="btn" variant="contained">
                미사용한 식권 보기
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </BuyListStyle>
  );
}

export default BuyList;
