import styled from "styled-components";
import React from "react";
import { Box, Grid, Chip } from "@mui/material";

const ChangeNickStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  width: 475px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 18px;
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

function ChangeNickname() {
  return (
    <ChangeNickStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        마이페이지 {">"} 닉네임 변경
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 5 }}>
        <Grid container spacing={2}>
          {/* 현재 닉네임 */}
          <Grid className="nick-title" item xs={12} sm={12} sx={{ ml: -1 }}>
            현재 닉네임
          </Grid>
          <Grid className="prevnick" item xs={12} sm={12}>
            홍길동
          </Grid>
          {/* 새 닉네임 */}
          <Grid
            className="nick-title"
            item
            xs={12}
            sm={12}
            sx={{ ml: -1, mt: 3 }}
          >
            새 닉네임
          </Grid>
          <Grid item xs={12} sm={12} sx={{ml:-1}}>
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
    </ChangeNickStyle>
  );
}

export default ChangeNickname;
