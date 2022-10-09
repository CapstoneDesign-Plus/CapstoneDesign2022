import styled from "styled-components";
import React from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import { Box } from "@mui/material";

const UsedStyle = styled.div`
  top: 0;
  margin: 0 auto;
  margin-top: 20px;
  width: 475px;
  font-weight: bold;
  color: #000000;

  .title {
    font-size: 18px;
  }
  .table {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
`;

function createData(index, buyDate, useDate, cost, course) {
  return { index, buyDate, useDate, cost, course };
}

const rows = [
  createData("1", "2022.09.21", "2022.09.21", "4,000", "A"),
  createData("2", "2022.09.21", "2022.09.21", "4,000", "A"),
  createData("3", "2022.09.21", "2022.09.21", "4,000", "A"),
];

function Used() {
  return (
    <UsedStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        마이페이지 {">"} 구매내역 {">"} 사용한 식권 보기
      </Box>
      <Box className="table">
        <Table sx={{ maxWidth: 440 }} aria-label="simple table">
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
                사용날짜
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.index}>
                <TableCell align="center" component="th" scope="row">
                  {row.index}
                </TableCell>
                <TableCell align="center">{row.buyDate}</TableCell>
                <TableCell align="center">{row.useDate}</TableCell>
                <TableCell align="center">{row.cost}</TableCell>
                <TableCell align="center">{row.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </UsedStyle>
  );
}

export default Used;
