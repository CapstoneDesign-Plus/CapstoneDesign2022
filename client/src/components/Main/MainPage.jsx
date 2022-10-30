import { Box, Grid, Button, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

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

  .myPageBtn {
    color: #49663c;
    font-size: 14px;
    font-weight: bolder;
    height: 35px;
    border-radius: 15px;
    display: flex;
    align-items: flex-start;
  }

  .box {
    border: 3px solid #b1d6a8;
    border-radius: 20px;
    width: 95%;
    height: 105px;
  }

  .coin {
    width: 30px;
    height: 30px;
  }

  .arrow {
    width: 20px;
    height: 20px;
  }

  .boxTitle {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }

  .boxContent {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }

  .banner {
    margin-top: 20px;
    width: 90%;
    height: 300px;
    background-color: #f2f7f1;
    border-radius: 15px;
  }

  .slide h1 {
    text-align: center;
    margin: 0;
    margin-top: 10px;
  }
  .slide h4 {
    text-align: center;
    margin: 0;
  }

  .slide label {
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .swiper .swiper-pagination-bullet {
    background-color: #49663c;
  }

  .noticeBox {
    width: 95%;
    display: flex;
    justify-content: center;
    margin: 0px;
    margin-top: 10px;
    overflow: hidden;
  }
`;

SwiperCore.use([Pagination, Autoplay]);
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
        <Box
          className="box"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            margin: "auto",
            mt: 3,
            pb: 0.5,
          }}
        >
          <Grid container spacing={2} style={{ margin: 0 }}>
            <Grid className="boxTitle" item xs={12} sx={{ pr: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img className="coin" alt="coin" src="\images\coin.png" />
                &nbsp;&nbsp;잔여 식권
              </Box>
              <Box
                sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
              >
                2 &nbsp;&nbsp;
                <Link to="/BuyList/UnUsed">
                  <img className="arrow" alt="coin" src="\images\arrow.png" />
                </Link>
              </Box>
            </Grid>
            <Grid className="boxContent" item xs={12} sx={{ pr: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img className="coin" alt="coin" src="\images\coin.png" />
                &nbsp;&nbsp;잔여 재화
              </Box>
              <Box
                sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
              >
                10,000 &nbsp;&nbsp;
                <Link to="/Charge">
                  <img className="arrow" alt="coin" src="\images\arrow.png" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* 식단 슬라이더 */}
        <Swiper
          className="banner"
          spaceBetween={0}
          initialSlide={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide className="slide">
            <Box sx={{ width: "290px", pl: "30px" }}>
              <h1>A</h1>
              <hr />
              <label>
                마늘보쌈
                <br />
                상추/깻잎+쌈장
                <br />
                쌈무, 파절이
                <br />
                시락국/흑미밥
              </label>
              <hr />
              <h4>대기시간 : 5분</h4>
            </Box>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Box sx={{ width: "290px", pl: "30px" }}>
              <h1>B</h1>
              <hr />
              <label>
                참치김치볶음밥
                <br />
                소떡소떡+치킨
                <br />
                소스
                <br />
                샐러드
                <br />
                우동장국
              </label>
              <hr />
              <h4>대기시간 : 3분</h4>
            </Box>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Box sx={{ width: "290px", pl: "30px" }}>
              <h1>C</h1>
              <hr />
              <label>
                컵과일
                <br />
                or
                <br />
                소라죽
              </label>
              <hr />
              <h4>대기시간 : 1분</h4>
            </Box>
          </SwiperSlide>
        </Swiper>
        {/* 공지사항 박스 */}
        <Box className="noticeBox">
          <List component="nav">
            <Link to="/Notice">
              <ListItem button divider style={{color:'black', fontWeight:'bolder'}}>
                <img className="coin" alt="coin" src="\images\coin.png" />
                &nbsp;&nbsp;공지사항
              </ListItem>
            </Link>
            <ListItem button divider>
              [공지] 밥심 사용방법
            </ListItem>
            <ListItem button divider>
              [공지] 오늘 저녁 식단 변경 사항 알림
            </ListItem>
            <ListItem button divider>
              [공지] 밥심 포인트 사용 및 충전 방법
            </ListItem>
          </List>
        </Box>
      </Box>
    </MainPageStyle>
  );
}

export default MainPage;
