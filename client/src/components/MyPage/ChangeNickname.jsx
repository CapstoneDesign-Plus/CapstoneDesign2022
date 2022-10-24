import styled from "styled-components";
import React from "react";
import { Box, Grid, Chip } from "@mui/material";

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
    border: 3px solid #B1D6A8;
    //border: 3px solid #f4f9f3;
    border-radius: 15px;
    outline-color: #B1D6A8;
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

function ChangeNickname() {
  return (
    <ChangeNickStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        마이페이지 {">"} 닉네임 변경
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 7, ml: 3, mr:3 }}>
        <Grid container spacing={2}>
          {/* 현재 닉네임 */}
          <Grid className="nick-title" item xs={12}>
            현재 닉네임
          </Grid>
          <Grid className="prevnick" item xs={12} sx={{ml:-0.5}}>
            홍길동
          </Grid>
          {/* 새 닉네임 */}
          <Grid
            className="nick-title"
            item
            xs={12}
            sx={{ mt: 3 }}
          >
            새 닉네임
          </Grid>
          <Grid item xs={12}sx={{ml:-1}}>
            <input
              className="input_nick"
              autoFocus
              placeholder=" 새로운 닉네임"
            />
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
          />
        </Grid>
      </Box>
    </ChangeNickStyle>
  );
}

export default ChangeNickname;
