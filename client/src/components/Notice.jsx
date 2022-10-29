import React from "react";

import {
  Box,
  Grid,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
} from "@mui/material";

import style from "../style/notice.scss";

function createData(index, buyDate, useDate) {
  return { index, buyDate, useDate };
}

const rows = [
  createData("01", "밥심 사용방법", "2022.09.21"),
  createData("02", "밥심 사용방법", "2022.09.21"),
  createData("03", "밥심 사용방법", "2022.09.21"),
  createData("04", "밥심 사용방법", "2022.09.21"),
  createData("05", "밥심 사용방법", "2022.09.21"),
  createData("06", "밥심 사용방법", "2022.09.21"),
];

export default function Notice() {
  return (
    <div style={{ margin: 0 }}>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml:2}}
      >
        공지사항
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: -2, ml: 1 }}>
            <input
              className={"input"}
              autoFocus
              placeholder="검색어를 입력하세요"
            />
          </Grid>
          <Grid item sx={{ mt: -2, ml: -1 }}>
            <Button color="primary">
              <img className="search" src="\images\search.png" />
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* table box*/}
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
                제목
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
                게시일
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
}
