import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import getToday from "../../lib/getToday";
import fetchDiet from "../../lib/fetchDiet";
import changeDietShape from "../../lib/changeDietShape";
import fetchWait from "../../lib/fetchWait";
import Loading from "../Loading";

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
  const [dietA, setDietA] = useState([]);
  const [dietB, setDietB] = useState([]);
  const [dietC, setDietC] = useState([]);
  const [timeA, setTimeA] = useState();
  const [timeB, setTimeB] = useState();
  const [timeC, setTimeC] = useState();

  useEffect(() => {
    fetchDiet().then((v) => {
      const today = getToday();
      setDietA(changeDietShape(v).a[today > -1 ? today : 0]);
      setDietB(changeDietShape(v).b[today > -1 ? today : 0]);
      setDietC(changeDietShape(v).c[today > -1 ? today : 0]);
    });
    fetchWait().then((v) => {
      setTimeA(v.A.waitSecond);
      setTimeB(v.B.waitSecond);
      setTimeC(v.C.waitSecond);
    });
  }, [timeA, timeB, timeC]);

  if (!dietA || timeA === undefined) return <Loading />;

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
              {dietA.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
            </label>
            <hr />
            <h4>대기시간 : {timeA}분</h4>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <Box sx={{ width: "290px", pl: "30px" }}>
            <h1>B</h1>
            <hr />
            <label>
              {dietB.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
            </label>
            <hr />
            <h4>대기시간 : {timeB}분</h4>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <Box sx={{ width: "290px", pl: "30px" }}>
            <h1>C</h1>
            <hr />
            <label>
              {dietC.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
            </label>
            <hr />
            <h4>대기시간 : {timeC}분</h4>
          </Box>
        </SwiperSlide>
      </Swiper>
    </MSliderStyle>
  );
}

export default MSlider;
