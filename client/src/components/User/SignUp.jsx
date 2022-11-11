import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import axios from "../../lib/axios";

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

async function signup(username, password, email) {
  const response = await axios.post("v1/user/auth/signup", {
    username,
    password,
    email,
  });
  return response;
}

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isUsername, setIsUsername] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [usernameMessage, setUsernameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
  useState("");

  const [isSignup, setIsSignup] = useState(false);

  const onChangeName = useCallback((e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setUsernameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsUsername(false);
    } else {
      setUsernameMessage("");
      setIsUsername(true);
    }
  }, []);

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 맞게 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해주세요"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호 일치");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("다시 입력해주세요");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );
  
  const handleClick = () => {
    signup(username, password, email).then(() => {
      setIsSignup(true);
      console.log("Complete!");
    });
  };

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
            <input
              className="input_name"
              autoFocus
              placeholder=" 사용자 이름"
              type="text"
              value={username}
              onChange={onChangeName}
            />
            {username.length > 0 && <span className={`message ${isUsername ? 'success' : 'error'}`}>{usernameMessage}</span>}
          </Grid>

          {/* 이메일 */}
          <Grid className="input_title" item xs={12} sx={{ mt: 3 }}>
            Email
          </Grid>
          <Grid item xs={12} sx={{ ml: -1 }}>
            <div className="email">
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <input
                    className="input_email"
                    placeholder=" 이메일"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                  {/* ..어떡하지 */}
                  {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
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
              value={password}
              onChange={onChangePassword}
            />
            {password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
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
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            {passwordConfirm.length > 0 && <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>}
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
            <Button className="login_btn" variant="contained" color="primary" onClick={handleClick}>
              회원가입
            </Button>
            <div>
              {isSignup && <Navigate to="/"/>}
            </div>
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
