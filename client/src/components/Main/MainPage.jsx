import { Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import MSlider from "./MSlider";
import MNotice from "./MNotice";
import MBox from "./MBox";
import authState from "../../state/auth";
import { useRecoilCallback, useRecoilState, useSetRecoilState } from "recoil";
import adminState from "../../state/admin";

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

  .logoutBtn {
    color: #49663c;
    font-size: 10px;
    font-weight: bolder;
    height: 25px;
    border-radius: 15px;
  }
`;

function MainPage() {
  const [auth, setAuth] = useRecoilState(authState);
  const setAdminMode = useSetRecoilState(adminState);

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
            <Box sx={{ mb: -1 }}>
              <img className="profile" alt="coin" src="\images\profile.png" />
            </Box>
          </Grid>
          <Grid item xs={5}>
            {auth ? (
              <>
                <h4 style={{ marginBottom: 0 }}>Hello,</h4>
                <h2 style={{ margin: 0 }}> {auth.username}님</h2>
              </>
            ) : (
              <h3 style={{ marginBottom: 0 }}>환영합니다!</h3>
            )}
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {auth ? (
              <>
                <Link to="/MyPage">
                  <Button className="myPageBtn" variant="contained">
                    마이페이지
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/Signin">
                  <Button className="myPageBtn" variant="contained">
                    로그인
                  </Button>
                </Link>
              </>
            )}
          </Grid>
        </Grid>
        {/* 잔여 식권/재화 Box */}
        {auth ? <MBox /> : <></>}
        {/* 식단 슬라이더 */}
        <MSlider />
        {/* 공지사항 박스 */}
        <MNotice />
        {/* 404 TEST */}

        {/* RequestEmail TEST */}
        <Link to="/RequestEmail">
          <Button>이메일 요청</Button>
        </Link>
        {/* ResetPassword(unvalid) TEST */}
        <Link to="/TokenInvalid">
          <Button>비밀번호 재설정(무효)</Button>
        </Link>
        {/* AdminPage TEST */}
        <Link to="/admin">
          <Button onClick={() => setAdminMode((value) => !value)}>Admin</Button>
        </Link>
        <Link to="/QRcode">
          <Button>QRCode</Button>
        </Link>
        <Link to="/Transfer">
          <Button>Transfer</Button>
        </Link>
        <Link to="/BuyTicket">
          <Button>BuyTicket</Button>
        </Link>
      </Box>
    </MainPageStyle>
  );
}

export default MainPage;
