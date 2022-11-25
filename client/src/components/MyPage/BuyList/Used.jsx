import styled from "styled-components";
import React, { useState } from "react";
// import {
//   Table,
//   TableCell,
//   TableRow,
//   TableHead,
//   TableBody,
//   Button,
// } from "@mui/material";
import { Box } from "@mui/material";
import UsedTicketItem from "./UsedTicketItem";
import { Stack } from "@mui/system";
import useGetFetch from "../../../hook/useGetFetch";

const UsedStyle = styled.div`
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

const rows = [
  createData("1", "2022.09.21", "4,000", "A", " "),
  createData("2", "2022.09.22", "4,000", "B", " "),
  createData("3", "2022.09.23", "4,000", "C", " "),
];

function Used() {
  const [expanded, setExpanded] = useState("");

  const [data] = useGetFetch(
    "http://bapsim.kro.kr/api/v1/user/history/" + auth.email
  );

  return (
    <UsedStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        사용 식권
      </Box>
      <Stack className="ticket-list">
        {data &&
          data.values.map((ticket) => (
            <UsedTicketItem
              key={ticket.identifier}
              ticket={ticket}
              expanded={expanded === ticket.identifier}
              setExpanded={setExpanded}
            />
          ))}

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
    </UsedStyle>
  );
}

export default Used;
