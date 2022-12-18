import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import {
//   Table,
//   TableCell,
//   TableRow,
//   TableHead,
//   TableBody,
//   Button,
// } from "@mui/material";
import { Box, Divider, Tabs, Tab } from "@mui/material";
import UnUsedTicketItem from "./UnUsedTicketItem";
import { Stack } from "@mui/system";
import authState from "../../../state/auth";
import { useRecoilState } from "recoil";
import fetchMyTicket from "../../../lib/fetchMyTicket";
import None from "./None";
import fltCanUseTicket from "../../../lib/fltTicket";

const UnUsedStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 20px;
  }
  .ticket-list {
    margin-top: 20px;
    width: 95%;
  }
  .table {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
`;

const TCLASS = ["A", "B", "C"];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function UnUsed() {
  const [auth, setAuth] = useRecoilState(authState);
  const [expanded, setExpanded] = useState("");
  const [data, setData] = useState();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    fetchMyTicket(auth.email).then((v) => {
      setData(fltCanUseTicket(v));
    });
  }, []);

  return (
    <UnUsedStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        잔여 식권
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label="A" {...a11yProps(0)} />
          <Tab label="B" {...a11yProps(1)} />
          <Tab label="C" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Divider />
      <Stack className="ticket-list">
        {data && data.filter((v) => v.tclass === TCLASS[tab]).length ? (
          data
            .filter((v) => v.tclass === TCLASS[tab])
            .sort((lhs, rhs) => lhs.createdAt - rhs.createdAt)
            .map((ticket) => (
              <UnUsedTicketItem
                key={ticket.identifier}
                ticket={ticket}
                expanded={expanded === ticket.identifier}
                setExpanded={setExpanded}
              />
            ))
        ) : (
          <None />
        )}
      </Stack>
    </UnUsedStyle>
  );
}

export default UnUsed;
