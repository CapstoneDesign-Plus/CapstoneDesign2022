import styled from "styled-components";
import React from "react";
import { Box, Grid, Chip, Button } from "@mui/material";

const ChangeNickStyle = styled.div`
  position: fixed;
  top: 0;
  margin: 0 auto;
  margin-top: 80px;
  width: 800px;
  left: 50%;
  transform: translate(-50%);
  font-weight: bold;
  background-attachment: scroll;
  color: #000000;

  .title {
    font-size: 20px;
  }
  .prevnick-title {
    font-size: 22px;
    color: #49663c;
  }
  .prevnick {
    font-size: 27px;
  }
  .newnick-title {
    font-size: 22px;
    color: #49663c;
  }
  .input_nick {
    font-size: 20px;
    padding-left: 10px;
    width: 630px;
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
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 8, ml: 10 }}>
        <Grid container spacing={2}>
          {/* 현재 닉네임 */}
          <Grid className="prevnick-title" item xs={12} sm={12} sx={{ ml: -1 }}>
            현재 닉네임
          </Grid>
          <Grid className="prevnick" item xs={12} sm={12}>
            홍길동
          </Grid>
          {/* 새 닉네임 */}
          <Grid
            className="newnick-title"
            item
            xs={12}
            sm={12}
            sx={{ ml: -1, mt: 8 }}
          >
            새 닉네임 입력
          </Grid>
          <Grid className="newnick" item xs={12} sm={12}>
            <input
              className="input_nick"
              autoFocus
              placeholder=" 새로운 닉네임"
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 8, mr: 10, float: 'right'}}>
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
