import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import QRCode from "react-qr-code";
import { useRecoilValue } from "recoil";
import authState from "../state/auth";
import fetchMyTicket from "../lib/fetchMyTicket";
import { Stack } from "@mui/system";
import { Button, Divider, Tab, Tabs } from "@mui/material";

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
    border-width: 2px;
    border-color: #49663c;
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
`;

const TCLASS = ["A", "B", "C"];

const koDtf = Intl.DateTimeFormat("ko", { dateStyle: "short" });

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function QRcode() {
  const auth = useRecoilValue(authState);
  const [selected, setSelected] = useState();
  const [ticket, setTicket] = useState([]);
  const [tab, setTab] = useState(0);

  const handleSelected = (value) => () => {
    setSelected(value);
  };

  useEffect(() => {
    fetchMyTicket(auth.email).then((v) => {
      setTicket(v);
    });
  }, []);

  return (
    <QRcodeStyle>
      <div style={{ margin: 0 }}>
        <Box className={"title"} sx={{ display: "flex", mt: 3, ml: 2 }}>
          QR Code 상세페이지
        </Box>

        <Box sx={{ display: "flex", mt: 3 }}>
          <Grid container spacing={3} sx={{ margin: 0 }}>
            {selected && (
              <div>
                코스 {selected.tclass}
                <br />
                가격 {selected.price}
                <br />
                상태 {selected.state}
                <br />
                구매자 {selected.buyer}
                <br />
                구매일 {koDtf.format(selected.createdAt)}
              </div>
            )}
            <Box
              className={"qr_box"}
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                mt: 1,
                ml: 6,
              }}
            >
              <QRCode
                style={{
                  height: 200,
                }}
                value={selected ? encodeURIComponent(selected.identifier) : ""}
                viewBox={`0 0 256 256`}
              />
            </Box>
          </Grid>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 3, mr: 3 }}
        >
          <Grid container spacing={2}>
            {/* 식권정보 */}
            <Grid className="input_title">내 식권</Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)}>
            <Tab label="A" {...a11yProps(0)} />
            <Tab label="B" {...a11yProps(1)} />
            <Tab label="C" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
            mr: 1,
          }}
        >
          <Stack spacing={2} sx={{ marginTop: "10px" }}>
            {ticket &&
              ticket
                .filter((v) => v.tclass === TCLASS[tab] && v.state != "used")
                .sort((lhs, rhs) => lhs.createdAt - rhs.createdAt)
                .map((t) => (
                  <Button
                    variant="contained"
                    style={{
                      width: "300px",
                      padding: "10px",
                    }}
                    key={t.identifier}
                    onClick={handleSelected(t)}
                  >
                    {t.tclass} 코스 - {t.state}
                  </Button>
                ))}
          </Stack>
        </Box>
      </div>
    </QRcodeStyle>
  );
}

export default QRcode;
