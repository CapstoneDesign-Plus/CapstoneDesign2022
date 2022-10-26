import styled from "styled-components";
import React from "react";
import { Box, Grid, Button } from "@mui/material";

const ResetPwStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 20px;
  }
  .input_title{
    font-size: 22px;
    color: #49663c;
  }
  .input_pw {
    font-size: 20px;
    padding-left: 10px;
    width: 100%;
    height: 50px;
    border: 3px solid #B1D6A8;
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

function ResetPassword() {
  return (
    <ResetPwStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        비밀번호 재설정
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr:3 }}>
        <Grid container spacing={2}>
          {/* 새 비밀번호 */}
          <Grid
            className="input_title"
            item
            xs={12}
            sm={12}
            sx={{ mt: 3 }}
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
            sx={{ mt: 3 }}
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
          mr: 3,
          ml: 3,
        }}
      >
        <Grid container>
        <Grid item xs={12}>
          <Button className="change_btn" variant="contained" color="primary">
            확 인
          </Button>
        </Grid>
        </Grid>
      </Box>
    </ResetPwStyle>
  );
}

export default ResetPassword;
