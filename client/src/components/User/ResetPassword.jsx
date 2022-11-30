import styled from "styled-components";
import React, { useCallback, useState, useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import axios from "../../lib/axios";
import { useParams, Navigate } from "react-router-dom";
import usePassword from "../../hook/usePassword";

const ResetPwStyle = styled.div`
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
  .change_btn {
    width: 100%;
    height: 40px;
    font-weight: bolder;
    font-size: 16px;
    color: #49663c;
    border-radius: 15px;
  }
`;

async function resetPw(new_password, token) {
  const response = await axios.put(
    "v1/user/auth/password/" + encodeURIComponent(token),
    {
      new_password,
    }
  );
  return response;
}

async function validToken(token) {
  const response = await axios.get(
    "v1/user/auth/password/valid?token=" + encodeURIComponent(token)
  );
  return response;
}

function ResetPassword() {
  const [password, setPassword, hash] = usePassword("");
  const [isPassword, setIsPassword] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const { token } = useParams();
  const [isReset, setisReset] = useState(false);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    validToken(token)
      .then(() => {
        console.log("Valid Complete!");
      })
      .catch(() => {
        setValid(false);
      });
    return () => {};
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
    resetPw(hash(), token).then(() => {
      setisReset(true);
      console.log("Reset Complete!");
    });
  };

  if (!valid) {
    return <Navigate to="/TokenInvalid" />;
  }

  return (
    <ResetPwStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        비밀번호 재설정
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr: 3 }}
      >
        <Grid container spacing={2}>
          {/* 새 비밀번호 */}
          <Grid className="input_title" item xs={12} sm={12} sx={{ mt: 3 }}>
            새 비밀번호
          </Grid>
          <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
            <input
              className="input_pw"
              placeholder=" 새 비밀번호"
              autoFocus
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            {password.length > 0 && (
              <span className={`message ${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </span>
            )}
          </Grid>
          {/* 새 비밀번호 확인 */}
          <Grid className="input_title" item xs={12} sm={12} sx={{ mt: 3 }}>
            새 비밀번호 확인
          </Grid>
          <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
            <input
              className="input_pw"
              placeholder=" 새 비밀번호 확인"
              type="password"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            {passwordConfirm.length > 0 && (
              <span
                className={`message ${isPasswordConfirm ? "success" : "error"}`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 3,
          mr: 3,
          ml: 3,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Button
              className="change_btn"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              확 인
            </Button>
            <div>{isReset && <Navigate to="/" />}</div>
          </Grid>
        </Grid>
      </Box>
    </ResetPwStyle>
  );
}

export default ResetPassword;
