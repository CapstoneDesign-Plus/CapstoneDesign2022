import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Box } from "@mui/material";

const MSliderStyle = styled.div`
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
`;

SwiperCore.use([Pagination, Autoplay]);

function MSlider() {
  return (
    <MSliderStyle>
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
    </MSliderStyle>
  );
}

export default MSlider;
