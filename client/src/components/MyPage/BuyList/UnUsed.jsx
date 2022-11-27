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
import { Box } from "@mui/material";
import UnUsedTicketItem from "./UnUsedTicketItem";
import { Stack } from "@mui/system";
import authState from "../../../state/auth";
import { useRecoilState } from "recoil";
import fetchMyTicket from "../../../lib/fetchMyTicket";
import None from "./None";

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

function createData(index, buyDate, cost, course, btn) {
  return { index, buyDate, cost, course, btn };
}

function UnUsed() {
  const [auth, setAuth] = useRecoilState(authState);
  const [expanded, setExpanded] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    fetchMyTicket(auth.email).then((v) => {
      setData(v);
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
      <Stack className="ticket-list">
        {data && data.length > 0 ? (
          data.map((ticket) => (
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
        {/* <Table sx={{ maxWidth: 440 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#B1D6A8" }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
                No.
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
                구매날짜
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
                금액
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
                코스
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
                양도
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.index}>
                <TableCell align="center" component="th" scope="row">
                  {row.index}
                </TableCell>
                <TableCell align="center">{row.buyDate}</TableCell>
                <TableCell align="center">{row.cost}</TableCell>
                <TableCell align="center">{row.course}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 10,
                      fontWeight: "bolder",
                      color: "black",
                    }}
                  >
                    양도하기
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}
      </Stack>
    </UnUsedStyle>
  );
}

export default UnUsed;
