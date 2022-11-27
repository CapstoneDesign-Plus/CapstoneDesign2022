import styled from "styled-components";
import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ResetPwStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 20px;
  }

  .contents {
    display: flex;
    justify-content: center;
  }

  img {
    width: 200px;
  }

  h4 {
    color: #49663c;
    text-align: center;
    font-size: 17px;
  }

  .btn {
    width: 100%;
    height: 40px;
    font-weight: bolder;
    font-size: 16px;
    color: #49663c;
    border-radius: 15px;
  }
`;

function TokenInvalid() {
  return (
    <ResetPwStyle>
      <Box className="contents" style={{ marginTop: "80px" }}>
        <img src="\images\expiration.png"></img>
      </Box>
      <h4>비밀번호 재설정 시간이 만료되었습니다.</h4>
      <Box className="contents">
        <Link to="/RequestEmail">
          <Button className="btn" variant="contained">
            요청 페이지로 이동
          </Button>
        </Link>
      </Box>
    </ResetPwStyle>
  );
}

export default TokenInvalid;
