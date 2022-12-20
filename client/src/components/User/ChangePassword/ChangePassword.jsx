import styled from "styled-components";
import React, { useState, useCallback, useRef } from "react";
import { Box, Grid, Chip, Button } from "@mui/material";
import axios from "../../../lib/axios";
import { useRecoilState } from "recoil";
import authState from "../../../state/auth";
import { Navigate } from "react-router-dom";
import usePassword from "../../../hook/usePassword";
import AlertModal from "./AlertModal";
import useModal from "../../../hook/useModal";
import sha256 from "../../../lib/sha256";

const ChangePwStyle = styled.div`
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
    width: 120px;
    height: 40px;
    font-weight: bolder;
    font-size: 18px;
    color: #49663c;
  }
`;

async function changePw(old_password, new_password) {
  const response = await axios.put("v1/user/change/password", {
    old_password,
    new_password,
  });
  return response;
}

function ChangePassword() {
  const { isOpen, toggle } = useModal();

  const [auth, setAuth] = useRecoilState(authState);
  const [isChange, setIsChange] = useState(false);

  const [old_pw, setOldpw, old_Hash] = usePassword("");
  const [new_pw, setNewpw, new_Hash] = usePassword("");

  const oldRef = useRef();

  const [isOldpw, setIsOldpw] = useState(false); //기존 비밀번호 일치 여부
  const [isPassword, setIsPassword] = useState(false); //새 비밀번호

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const onChangeOldPassword = (e) => {
    setOldpw(e.target.value);
  };

  const onChangeNewPassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setNewpw(passwordCurrent);

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

  const onChangeNewPasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (new_pw === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호 일치");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("다시 입력해주세요");
        setIsPasswordConfirm(false);
      }
    },
    [new_pw]
  );

  const handleClick = () => {
    changePw(old_Hash(), new_Hash()).then(() => {
      toggle();
      setIsChange(true);
      console.log("Change Password Complete!");
    });
  };

  return (
    <ChangePwStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        비밀번호 변경
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr: 3 }}
      >
        <Grid container spacing={2}>
          {/* 현재 비밀번호 */}
          <Grid className="input_title" item xs={12} sm={12} sx={{ mt: 3 }}>
            현재 비밀번호
          </Grid>
          <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
            <input
              ref={oldRef}
              className="input_pw"
              autoFocus
              placeholder=" 현재 비밀번호"
              type="password"
              value={old_pw}
              onChange={onChangeOldPassword}
            />
          </Grid>
          {/* 새 비밀번호 */}
          <Grid className="input_title" item xs={12} sm={12} sx={{ mt: 3 }}>
            새 비밀번호
          </Grid>
          <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
            <input
              className="input_pw"
              placeholder=" 새 비밀번호"
              type="password"
              onChange={onChangeNewPassword}
            />
            {new_pw.length > 0 && (
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
              onChange={onChangeNewPasswordConfirm}
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
          mr: 2,
          float: "right",
        }}
      >
        <Grid>
          <Chip
            className="change_btn"
            label="변경하기"
            clickable
            component="a"
            href="#"
            color="primary"
            onClick={handleClick}
          />
          {/* 모달 창 띄우고 로그아웃 시키고 메인페이지로 Navigate */}
          {isChange && <AlertModal isOpen={isOpen} toggle={toggle} />}
        </Grid>
      </Box>
    </ChangePwStyle>
  );
}

export default ChangePassword;
