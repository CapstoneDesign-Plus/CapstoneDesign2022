import { Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import MSlider from "./MSlider";
import MNotice from './MNotice';
import MBox from './MBox';

const MainPageStyle = styled.div`
  margin: auto;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  color: #000000;

  .profile {
    width: 50px;
    height: 50px;
  }
  .coin {
    width: 30px;
    height: 30px;
  }

  .myPageBtn {
    color: #49663c;
    font-size: 14px;
    font-weight: bolder;
    height: 35px;
    border-radius: 15px;
    display: flex;
    align-items: flex-start;
  }
`;


function MainPage() {
  return (
    <MainPageStyle>
      <Box sx={{ mt: 3 }}>
        {/* Top */}
        <Grid container spacing={1}>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Box>
              <img className="profile" alt="coin" src="\images\coin.png" />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <h4 style={{ marginBottom: 0 }}>Hello,</h4>
            <h2 style={{ margin: 0 }}>홍길동 님</h2>
          </Grid>
          <Grid
            item
            xs={3.5}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Link to="/MyPage">
              <Button className="myPageBtn" variant="contained">
                마이페이지
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/* 잔여 식권/재화 Box */}
        <MBox />
        {/* 식단 슬라이더 */}
        <MSlider />
        {/* 공지사항 박스 */}
        <MNotice />
      </Box>
    </MainPageStyle>
  );
}

export default MainPage;
