import styled from "styled-components";
import React from "react";
import { Box, Grid, Button } from "@mui/material";

const RequestEmailStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 20px;
  }

  .imageBox {
    display: flex;
    justify-content: center;
  }

  img {
    width: 150px;
  }

  .emailTitle {
    font-size: 22px;
    color: #49663c;
  }

  .email {
    border: 3px solid #b1d6a8;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    padding-left: 10px;
  }

  .inputEmail {
    font-size: 20px;
    margin: 5px 0px;
    width: 100%;
    height: 40px;
    border: 0px solid #b1d6a8;
    //border: 3px solid #f4f9f3;
    border-radius: 15px;
    outline-color: white;
  }
  .selectEmail {
    font-size: 15px;
    font-weight: bolder;
    color: #666666;
    margin: 5px 0px;
    width: 100%;
    height: 40px;
    border: 0px solid #b1d6a8;
    outline-color: white;
  }

  .btn {
    border-radius: 15px;
    color: #49663c;
    font-weight: bold;
    font-size: 18px;
    width: 100px;
  }
`;

function RequestEmail() {
  return (
    <RequestEmailStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        이메일 요청
      </Box>
      <Box sx={{ mt: 5, ml: 3, mr: 3 }}>
        <Grid container spacing={2}>
          <Grid className="imageBox" item xs={12}>
            <img alt="MAIL" src="images\mail.png" />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr: 3 }}
      >
        <Grid className="emailTitle" item xs={12} sx={{ mt: 3 }}>
          Email
        </Grid>
      </Box>
      <Grid item xs={12} sx={{ ml: -1 }}>
        <div className="email">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <input
                className="inputEmail"
                placeholder=" 이메일"
                type="email"
              />
            </Grid>
            <Grid item xs={5}>
              <select className="selectEmail">
                <option value="직접입력">직접입력</option>
                <option value="naver">@naver.com</option>
                <option value="google">@google.com</option>
                <option value="daum">@daum.net</option>
              </select>
            </Grid>
          </Grid>
        </div>
      </Grid>

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
          <Grid item xs={12} sx={{display:'flex', justifyContent: 'flex-end'}}>
            <Button className="btn" variant="contained" color="primary">
              전 송
            </Button>
          </Grid>
          <Grid item xs={12} sx={{mt:4}}>
            입력하신 이메일로 링크가 전송되었습니다.<br />
            비밀번호 재설정 시간은 요청 후 10분 입니다.
          </Grid>
        </Grid>
      </Box>
    </RequestEmailStyle>
  );
}

export default RequestEmail;
