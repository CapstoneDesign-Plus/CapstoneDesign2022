import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import styled from "styled-components";

const QRcodeStyle = styled.div`
top: 0;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;
  .title {
    font-size: 20px;
    align-self: flex-start;
  }
  .name {
    font-size: 30px;
  }
  .email {
    font-size: 20px;
  }
  .qr_box {
    border-style: solid;
    
    border-color: #f2f7f1;
    border-radius: 20px;
    padding: 10px 10px;
    width: 70%;
    height: 250px;
    display: flex;
    justify-content: center;

  }
  .coin_title {
    font-size: 20px;
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .coin_content {
    font-size: 25px;
    display: flex;
    justify-content: space-between;
  }
  .coin_btn {
    width: 80px;
    height: 35px;
    font-weight: bolder;
    font-size: 15px;
    color: #49663c;
  }
  .btn-group {
    margin: auto 5px;
    display: flex;
    justify-content: center;
  }
  .btn {
    color: #49663c;
    width: 190px;
    height: 70px;
    font-weight: bolder;
    font-size: 20px;
  }
  .coin {
    width: 30px;
    height: 30px;
  }
  .ticket_btn {
    color: #49663c;
    background-color: #deecdc;
    border-radius: 1ch;
    width: 350px;
    height: 60px;
    margin-top: 1ch;
    font-weight: bolder;
    font-size: 20px;
  }

  
  
`

function QRcode() {
  return (
    <QRcodeStyle>
    <div style={{ margin: 0 }}>
      <Box
        className={"title"}
        sx={{ display: "flex", mt: 3, ml: 2 }}
      >
        QR Code 상세페이지
      </Box>
      
      <Box sx={{ display: "flex", mt: 3 }}>
        <Grid container spacing={3} sx={{ margin: 0 }}>
          <Box sx={{ display: "flex", mt: 3 }}
            className={"qr_box"}
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "auto",
              mt: 1,
              ml:6,
            }}
        >
        </Box>
         </Grid>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-end", mt:4, ml: 3, mr:3 }}>
        <Grid container spacing={2}>
          {/* 식권정보 */}
          <Grid
            className="input_title"

          >
            내가 구매한 식권
          </Grid>
          </Grid>
          </Box>

          <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 1,
          mr: 1,
          float: "right",
        }}
      >
        <Grid>
        <button className="ticket_btn">A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4,000원</button>  
        </Grid>
      </Box>
           
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 1,
          mr: 1,
          float: "right",
        }}
      >
        <Grid>
        <button className="ticket_btn">B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4,000원</button>  
        </Grid>
      </Box>

     
      </div>
      </QRcodeStyle>
  );
}

export default QRcode;
