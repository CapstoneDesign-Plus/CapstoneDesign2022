import styled from "styled-components";
import React from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const SigninStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 20px;
  }
  .input_title {
    font-size: 22px;
    color: #49663c;
  }
  .input_name {
    font-size: 20px;
    padding-left: 10px;
    width: 100%;
    height: 50px;
    border: 3px solid #b1d6a8;
    //border: 3px solid #f4f9f3;
    border-radius: 15px;
    outline-color: #b1d6a8;
  }
  .email {
    border: 3px solid #b1d6a8;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    padding-left: 10px;
  }
  .input_email {
    font-size: 20px;
    margin: 5px 0px;
    width: 100%;
    height: 40px;
    border: 0px solid #b1d6a8;
    //border: 3px solid #f4f9f3;
    border-radius: 15px;
    outline-color: white;
  }
  .select_email {
    font-size: 15px;
    font-weight: bolder;
    color: #666666;
    margin: 5px 0px;
    width: 100%;
    height: 40px;
    border: 0px solid #b1d6a8;
    outline-color: white;
  }
  .input_pw {
    font-size: 20px;
    padding-left: 10px;
    width: 100%;
    height: 50px;
    border: 3px solid #b1d6a8;
    //border: 3px solid #f4f9f3;
    border-radius: 15px;
    outline-color: #b1d6a8;
  }
  input::placeholder {
    font-size: 15px;
    font-weight: bold;
    color: #666666;
  }
  .login_btn {
    width: 100%;
    height: 40px;
    font-weight: bolder;
    font-size: 16px;
    color: #49663c;
    border-radius: 15px;
  }
  .link {
    text-align: center;
  }
  .btn {
    font-weight: bolder;
    font-size: 17px;
  }
`;

const emailOptions = [
  { label: "naver.com", id: 1 },
  { label: "google.com", id: 2 },
  { label: "daum.com", id: 3 },
];

function SignIn() {
  return (
    <SigninStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        회원가입
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr: 3 }}
      >
        <Grid container spacing={2}>
          {/* 사용자 이름 */}
          <Grid className="input_title" item xs={12} sx={{ mt: 3 }}>
            User Name
          </Grid>
          <Grid item xs={12} sx={{ ml: -1 }}>
            <input className="input_name" autoFocus placeholder=" 사용자 이름" />
          </Grid>

          {/* 이메일 */}
          <Grid className="input_title" item xs={12} sx={{ mt: 3 }}>
            Email
          </Grid>
          <Grid item xs={12} sx={{ ml: -1 }}>
            <div className="email">
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <input className="input_email" placeholder=" 이메일" />
                </Grid>
                <Grid item xs={5}>
                  <select className="select_email">
                    <option value="직접입력">직접입력</option>
                    <option value="naver">@naver.com</option>
                    <option value="google">@google.com</option>
                    <option value="daum">@daum.net</option>
                  </select>
                </Grid>
              </Grid>
            </div>
          </Grid>

          {/* 비밀번호 */}
          <Grid className="input_title" item xs={12} sx={{ mt: 3 }}>
            Password
          </Grid>
          <Grid item xs={12} sx={{ ml: -1 }}>
            <input
              className="input_pw"
              placeholder=" 비밀번호"
              type="password"
            />
          </Grid>

          {/* 비밀번호 확인 */}
          <Grid className="input_title" item xs={12} sx={{ mt: 3 }}>
            Password Confirm
          </Grid>
          <Grid item xs={12} sx={{ ml: -1 }}>
            <input
              className="input_pw"
              placeholder=" 비밀번호 확인"
              type="password"
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 4,
          ml: 3,
          mr: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid className="login" item xs={12}>
            <Button className="login_btn" variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
          <Grid className="link" item xs={6}>
            <Link to="/ChangePassword">
              <Button className="btn" color="success">
                비밀번호 변경
              </Button>
            </Link>
          </Grid>
          <Grid className="link" item xs={6}>
            <Link to="/ChangePassword">
              <Button className="btn" color="success">
                회원 가입
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </SigninStyle>
  );
}

export default SignIn;
