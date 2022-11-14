import styled from "styled-components";
import React, { useState, useCallback } from "react";
import { Box, Grid, Chip } from "@mui/material";
import authState from "../../state/auth";
import { useRecoilState } from "recoil";
import axios from "../../lib/axios";
import { Navigate } from "react-router-dom";

const ChangeNickStyle = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 20px;
  }
  .nick-title {
    font-size: 22px;
    color: #49663c;
  }
  .prevnick {
    font-size: 27px;
  }
  .input_nick {
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

async function changeNick(new_name) {
  const response = await axios.put("v1/user/change/name?new_name=" + new_name);
  return response;
}

function ChangeNickname() {
  const [auth, setAuth] = useRecoilState(authState);
  const [isChange, setIsChange] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [isUsername, setIsUsername] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState("");

  const onChangeNewUsername = useCallback((e) => {
    setNewUsername(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setUsernameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsUsername(false);
    } else {
      setUsernameMessage("");
      setIsUsername(true);
    }
  }, []);

  const handleClick = () => {
    changeNick(newUsername).then(() => {
      setIsChange(true);
      console.log("Change Nickname Complete!");
    });
  };

  return (
    <ChangeNickStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        닉네임 변경
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 7, ml: 3, mr: 3 }}
      >
        <Grid container spacing={2}>
          {/* 현재 닉네임 */}
          <Grid className="nick-title" item xs={12}>
            현재 닉네임
          </Grid>
          <Grid className="prevnick" item xs={12} sx={{ ml: -0.5 }}>
            {auth.username}
          </Grid>
          {/* 새 닉네임 */}
          <Grid className="nick-title" item xs={12} sx={{ mt: 3 }}>
            새 닉네임
          </Grid>
          <Grid item xs={12} sx={{ ml: -1 }}>
            <input
              className="input_nick"
              autoFocus
              placeholder=" 새로운 닉네임"
              onChange={onChangeNewUsername}
            />
            {newUsername.length > 0 && (
              <span className={`message ${isUsername ? "success" : "error"}`}>
                {usernameMessage}
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
          {isChange && <Navigate to="/" />}
        </Grid>
      </Box>
    </ChangeNickStyle>
  );
}

export default ChangeNickname;
