import React, { useCallback, useEffect } from "react";
import { Box, Grid, Chip, Button } from "@mui/material";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "../lib/axios";
import tickets from "../lib/tickets";
import changeTicketOwner from "../lib/changeTicketOwner";

const TransferStyle = styled.div`
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
  .input_Email {
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
  .transfer_btn {
    color: #49663c;
    background-color: #b1d6a8;
    border-radius: 2ch;
    width: 358px;
    height: 45px;
    margin-top: 3ch;
    font-weight: bolder;
    font-size: 18px;
  }
  .box {
    background-color: #f2f7f1;
    border-radius: 2ch;
    width: 100%;
    height: 70px;
  }

  .boxContent {
    font-size: 30px;
    display: flex;
    justify-content: center;
  }
`;

async function confirm(email) {
  const response = await axios.get("v1/user/get/is?email=" + email);
  return response;
}

function Transfer() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const { token } = useParams();
  const [tclass, setTclass] = useState();
  const [price, setPrice] = useState();

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 맞게 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  const handleClick = () => {
    confirm(email).then((value) => {
      if (value.data.ok) {
        setEmailMessage("");
        changeTicketOwner(token, email).then((value) => {
          if (value.ok) {
            console.log(value);
            console.log("양도 완료..?");
          }
        });
      } else {
        setEmailMessage("존재하지 않는 이메일입니다.");
      }
    });
  };

  useEffect(() => {
    tickets(token).then((v) => {
      setPrice(v.price);
      setTclass(v.tclass);
    });
  });

  return (
    <TransferStyle>
      <div style={{ margin: 0 }}>
        <Box
          className="title"
          sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
        >
          양도하기
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr: 3 }}
        >
          <Grid container spacing={2}>
            {/* 식권정보 */}
            <Grid className="input_title" item xs={12} sm={12} sx={{ mt: 3 }}>
              식권정보
            </Grid>

            <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
              <Box
                className="box"
                sx={{
                  display: "flex",
                  mt: 1,
                }}
              >
                <Grid container spacing={3} style={{ margin: 0 }}>
                  <Grid className="boxContent" item xs={12} sx={{ pr: "16px" }}>
                    {tclass}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price}원
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* 보낼 사람 Eamil */}
            <Grid className="input_title" item xs={12} sm={12} sx={{ mt: 3 }}>
              보낼 사람 Email
            </Grid>
            <Grid item xs={12} sm={12} sx={{ ml: -1 }}>
              <input
                className="input_Email"
                placeholder="보낼 사람의 Email을 입력해주세요."
                onChange={onChangeEmail}
              />
              {email.length > 0 && (
                <span className={`message ${isEmail ? "success" : "error"}`}>
                  {emailMessage}
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
            <button className="transfer_btn" onClick={handleClick}>
              양도하기
            </button>
          </Grid>
        </Box>
      </div>
    </TransferStyle>
  );
}
export default Transfer;
