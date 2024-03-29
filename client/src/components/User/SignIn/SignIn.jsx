import styled from "styled-components";
import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import login from "../../../lib/login";
import authState from "../../../state/auth";
import { useRecoilState } from "recoil";
import usePassword from "../../../hook/usePassword";
import WrongModal from "./WrongModal";

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
  .input_email {
    font-size: 20px;
    padding-left: 10px;
    width: 100%;
    height: 50px;
    border: 3px solid #b1d6a8;
    //border: 3px solid #f4f9f3;
    border-radius: 15px;
    outline-color: #b1d6a8;
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

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword, hash] = usePassword("");
  const [fail, setFail] = useState(false);
  const [auth, setAuth] = useRecoilState(authState);
  //const [isLogin, setIsLogin] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    login(email, hash()).then((value) => {
      if (value.ok) {
        setAuth(value.result);
        setFail(false);
        console.log("Login Complete!");
      } else {
        setFail(true);
        console.log("Login Fail");
      }
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      login(email, hash()).then((value) => {
        if (value.ok) {
          setAuth(value.result);
          setFail(false);
          console.log("Login Complete!");
        } else {
          setFail(true);
          console.log("Login Fail");
        }
      });
    }
  };

  return (
    <SigninStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        로그인
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr: 3 }}
      >
        <Grid container spacing={2}>
          {/* 이메일 */}
          <Grid className="input_title" item xs={12} sx={{ mt: 3 }}>
            Email
          </Grid>
          <Grid item xs={12} sx={{ ml: -1 }}>
            <input
              className="input_email"
              autoFocus
              placeholder=" 이메일"
              type="email"
              value={email}
              onChange={handleEmail}
            />
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
              value={password}
              onChange={handlePw}
              onKeyPress={handleKeyPress}
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
          <Grid item xs={12}>
            <Button
              className="login_btn"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              로그인
            </Button>
            <div>{auth && <Navigate to="/" />}</div>
          </Grid>
          <Grid className="link" item xs={6}>
            <Link to="/RequestEmail">
              <Button className="btn" color="success">
                비밀번호 재설정
              </Button>
            </Link>
          </Grid>
          <Grid className="link" item xs={6}>
            <Link to="/SignUp">
              <Button className="btn" color="success">
                회원 가입
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      {fail && <WrongModal />}
    </SigninStyle>
  );
}

export default SignIn;
