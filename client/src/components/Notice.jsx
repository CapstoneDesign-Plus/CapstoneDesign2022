import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import searchNoticeKeyword from "../lib/searchNoticeKeyword";

import fetchNoticeList from "../lib/fetchNoticeList";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  ListItem,
  Pagination,
  Button,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import authState from "../state/auth";
import style from "../style/notice.scss";

const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "short" });

const Notice = () => {
  const [noticeContents, setNoticeContent] = useState();
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  const [keyword, setKeyword] = useState("");
  const auth = useRecoilValue(authState);

  useEffect(() => {
    fetchNoticeList(page, 10).then((v) => {
      setPageLimit(Math.ceil(v.totalCount / v.countPerPage));
      setNoticeContent(v.values);
    });
  }, [page]);

  const search = () => {
    searchNoticeKeyword(keyword).then(setNoticeContent);
  };

  if (!noticeContents) return <Loading />;

  return (
    <div style={{ margin: 0 }}>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        공지사항
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2 }}>
        <Grid container spacing={3}>
          <Grid item>
            <input
              className="input"
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
          </Grid>
          <Grid item>
            <Button
              sx={{ marginTop: "3px" }}
              onClick={search}
              variant="contained"
            >
              검색
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
            {noticeContents.map((item) => (
              <TableRow key={item.identifier}>
                <TableCell align="center" component="th" scope="row">
                  {item.identifier}
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Link to={{ pathname: `/NoticeDetail/${item.identifier}` }}>
                    <ListItem style={{ color: "black" }}>{item.title}</ListItem>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  {koDtf.format(item.postedAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      {auth && auth.admin && (
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "5px",
          }}
        >
          <Link to={`/admin/notice`}>
            <Button variant="contained">글쓰기</Button>
          </Link>
        </Box>
      )}
      <Pagination
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "20px",
        }}
        page={page}
        onChange={(e, v) => setPage(v)}
        count={pageLimit}
      />
    </div>
  );
};

export default Notice;
