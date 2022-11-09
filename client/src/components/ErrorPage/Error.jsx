import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ErrorStyle = styled.div`
  img {
    transform: translate(50%, 10%);
    margin-top: 100px;
    width: 200px;
  }

  p {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color:#49663c;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    height: 30px;
    width: 90px;
    color: #49663c;
    font-weight: bold;
    align-items: center;
  }
`;

function Error() {
  return (
    <ErrorStyle>
      <img className="error" alt="ERROR" src="\images\404.png" />
      <br /><br />
      <p>PAGE NOT FOUND</p>
      <div>
        <Link to="/">
      <Button className="btn" variant="contained">
        돌아가기
      </Button>
      </Link>
      </div>
    </ErrorStyle>
  );
}

export default Error;
