import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const MypageStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  width: 475px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 18px;
  }
  .name {
    font-size: 30px;
  }
  .email {
    font-size: 20px;
  }
  .coin_box {
    border-style: solid;
    border-color: #b1d6a8;
    border-radius: 20px;
    width: 420px;
    height: 110px;
    display: flex;
    justify-content: center;
  }
  .coin_title {
    font-size: 20px;
    margin: 0 auto;
    margin-left: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .coin_content {
    font-size: 25px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
  }
  .coin_btn {
    width: 80px;
    height: 35px;
    font-weight: bolder;
    font-size: 15px;
    color: #49663c;
  }
  .btn-group {
    display: flex;
    justify-content: center;
  }
  .btn {
    color: #49663c;
    width: 210px;
    height: 70px;
    font-weight: bolder;
    font-size: 20px;
  }
  .coin {
    width: 30px;
    height: 30px;
  }
`;

function Mypage() {
  return (
    <div className="root">
      <MypageStyle>
        <Box
          className="title"
          sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
        >
          마이페이지
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 5, ml: 5 }}>
          <Grid container spacing={2}>
            {/* 이름, 이메일 */}
            <Grid className="name" item xs={12} sm={12}>
              홍길동
            </Grid>
            <Grid className="email" item xs={12} sm={12}>
              Hong Gil Dong@gmail.com
            </Grid>
            {/* 재화 박스 */}
            <Box
              className="coin_box"
              sx={{ display: "flex", alignItems: "flex-start", mt: 3, ml: 0 }}
            >
              <Grid container spacing={2}>
                <Grid className="coin_title" item xs={12} sm={12}>
                  잔여재화
                </Grid>
                <Grid className="coin_content" item xs={12} sm={2}>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <img className="coin" alt="coin" src="\images\coin.png" />
                    10,000
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Chip
                    className="coin_btn"
                    label="충 전"
                    clickable
                    component="a"
                    href="#"
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Box>
            {/* 버튼 박스 */}
            <Box>
              <ButtonGroup className="btn-group" sx={{ mt: 10 }}>
                <Link to="/ChangeNickname">
                  <Button
                    className="btn"
                    variant="contained"
                    color="primary"
                    sx={{
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    닉네임 변경
                  </Button>
                </Link>
                <Link to="/ChangePassword">
                  <Button
                    className="btn"
                    variant="contained"
                    color="primary"
                    sx={{
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    비밀번호 변경
                  </Button>
                </Link>
              </ButtonGroup>
              <ButtonGroup className="btn-group" sx={{ mt: 0 }}>
                <Link to="/BuyList">
                  <Button
                    className="btn"
                    variant="contained"
                    color="primary"
                    sx={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 20,
                    }}
                  >
                    구매 내역
                  </Button>
                </Link>
                <Button
                  className="btn"
                  variant="contained"
                  color="primary"
                  sx={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 20,
                  }}
                >
                  로그아웃
                </Button>
              </ButtonGroup>
            </Box>
          </Grid>
        </Box>
      </MypageStyle>
    </div>
  );
}

export default Mypage;
