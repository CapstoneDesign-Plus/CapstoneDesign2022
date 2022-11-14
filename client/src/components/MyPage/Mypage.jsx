import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import axios from "../../lib/axios";
import authState from "../../state/auth";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";

const MypageStyle = styled.div`
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
    padding: 0px 10px;
    width: 90%;
    height: 105px;
    display: flex;
    justify-content: center;
  }
  .coin_title {
    font-size: 20px;
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .coin_content {
    font-size: 25px;
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
    margin: auto 5px;
    display: flex;
    justify-content: center;
  }
  .btn {
    color: #49663c;
    width: 190px;
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
  const [auth, setAuth] = useRecoilState(authState);

  async function logout() {
    const response = await axios.get("v1/user/auth/logout");
    return response;
  }

  const handleClick = () => {
    if (auth != null) {
      logout().then(() => {
        setAuth(null);
        console.log("Logout Complete!");
      });
    }
  };

  if(!auth) return <Navigate to="/" />;

  return (
    <MypageStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        마이페이지
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 5 }}>
        <Grid container spacing={2} sx={{ margin: 0 }}>
          {/* 이름, 이메일 */}
          <Grid className="name" item xs={12} sm={12}>
            {auth.username}
          </Grid>
          <Grid className="email" item xs={12} sm={12}>
            {auth.email}
          </Grid>
          {/* 재화 박스 */}
          <Box
            className="coin_box"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              margin: "auto",
              mt: 3,
              ml: 1,
            }}
          >
            <Grid container spacing={2} style={{ margin: 0 }}>
              <Grid className="coin_title" item xs={12}>
                잔여재화
              </Grid>
              <Grid className="coin_content" item xs={8}>
                <Box sx={{ display: "flex", alignItems: "left" }}>
                  <img className="coin" alt="coin" src="\images\coin.png" />
                  &nbsp;{auth.point}
                </Box>
              </Grid>
              <Grid item xs={4}>
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
            <ButtonGroup
              className="btn-group"
              sx={{ display: "flex", alignItems: "flex-start" }}
              style={{ marginTop: "50px" }}
            >
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
                onClick={handleClick}
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
  );
}

export default Mypage;
