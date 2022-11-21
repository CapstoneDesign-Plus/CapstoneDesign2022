import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import axios from "../../../lib/axios";
import SendEmailModal from "./SendEmailModal";

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

async function request(email) {
  const response = await axios.get("v1/user/auth/password?email=" + email);
  return response;
}

function RequestEmail() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  //const [fail, setFail] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    request(email).then(() => {
      handleOpen();
      console.log("Request Complete!");
    });
  };

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
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 3, mr: 5 }}
      >
        <Grid item xs={12}>
          <div className="email">
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <input
                  className="inputEmail"
                  placeholder=" 이메일"
                  type="email"
                  value={email}
                  onChange={onChangeEmail}
                />
                {email.length > 0 && (
                  <span className={`message ${isEmail ? "success" : "error"}`}>
                    {emailMessage}
                  </span>
                )}
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
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              className="btn"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              전 송
            </Button>
            <div>
              {open && <SendEmailModal open={open} handleClose={handleClose} />}
            </div>
          </Grid>
        </Grid>
      </Box>
    </RequestEmailStyle>
  );
}

export default RequestEmail;
