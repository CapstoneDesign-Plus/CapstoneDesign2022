import styled from "styled-components";
import React from "react";
import { Box, Grid, Chip } from "@mui/material";

const ChangePwStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 18px;
  }
  .input_title{
    font-size: 20px;
    color: #49663c;
  }
  .input_pw {
    font-size: 20px;
    padding-left: 10px;
    width: 390px;
    height: 50px;
    border: 3px solid #f4f9f3;
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

function ChangePassword() {
  return (
    <ChangePwStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        마이페이지 {">"} 비밀번호 변경
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 5 }}>
        <Grid container spacing={2}>
          {/* 현재 비밀번호 */}
          <Grid
            className="input_title"
            item
            xs={12}
            sm={12}
            sx={{ ml: -1, mt: 3 }}
          >
            현재 비밀번호
          </Grid>
          <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
            <input
              className="input_pw"
              autoFocus
              placeholder=" 현재 비밀번호"
            />
          </Grid>
          {/* 새 비밀번호 */}
          <Grid
            className="input_title"
            item
            xs={12}
            sm={12}
            sx={{ ml: -1, mt: 3 }}
          >
            새 비밀번호
          </Grid>
          <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
            <input className="input_pw" placeholder=" 새 비밀번호" />
          </Grid>
          {/* 새 비밀번호 확인 */}
          <Grid
            className="input_title"
            item
            xs={12}
            sm={12}
            sx={{ ml: -1, mt: 3 }}
          >
            새 비밀번호 확인
          </Grid>
          <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
            <input className="input_pw" placeholder=" 새 비밀번호 확인" />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 3,
          mr: 6,
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
          />
        </Grid>
      </Box>
    </ChangePwStyle>
  );
}

export default ChangePassword;
