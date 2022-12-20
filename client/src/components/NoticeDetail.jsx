import { Link, Navigate, useParams } from "react-router-dom";
import {
  Box,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
  Divider,
} from "@mui/material";
import WebServiceManager from "../util/webservice_manager";
import { useState } from "react";
import Loading from "./Loading";
import { useEffect } from "react";
import fetchNotice from "../lib/fetchNotice";
import { useRecoilValue } from "recoil";
import authState from "../state/auth";
import deleteNotice from "../lib/deleteNotice";

const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "short" });

const NoticeDetail = () => {
  const [detailContents, setDetailContents] = useState();
  const [isNotice, setIsNotice] = useState(true);
  const auth = useRecoilValue(authState);

  const { id } = useParams();

  useEffect(() => {
    fetchNotice(id)
      .then(setDetailContents)
      .catch(() => setIsNotice(false));
  }, []);

  if (!detailContents) return <Loading />;

  if (!isNotice) return <Navigate to="/Notice" />;

  return (
    <div style={{ margin: 0 }}>
      <Box
        className="title"
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 3,
          ml: 2,
        }}
      >
        게시글 확인
      </Box>

      {/* table box*/}
      <Box className="table">
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#B1D6A8" }}>
            <TableRow>
              <TableCell
                colSpan={2}
                align={"left"}
                sx={{ color: "black", lineHeight: "0.5" }}
              >
                [{detailContents.header}]&nbsp;{detailContents.title}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell
              align={"left"}
              sx={{ color: "black", lineHeight: "0.5" }}
            >
              No.{detailContents.identifier}
            </TableCell>
            <TableCell
              align={"right"}
              sx={{ color: "black", lineHeight: "0.5" }}
            >
              게시일 : {koDtf.format(detailContents.postedAt)}
            </TableCell>
          </TableRow>
          <TableBody>
            <Box sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}>
              {detailContents.content}
            </Box>
          </TableBody>
        </Table>
      </Box>
      <Box
        className="title"
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          mt: 3,
          ml: 2,
        }}
      >
        <Link to="/Notice">
          <Button className="myPageBtn" variant="contained">
            목록
          </Button>
        </Link>
        {auth && auth.admin && (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                marginRight: "5px",
              }}
              onClick={() => {
                deleteNotice(id).finally(() => setIsNotice(false));
              }}
            >
              삭제
            </Button>
            <Link to={`/admin/notice/${id}`}>
              <Button variant="contained">수정</Button>
            </Link>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default NoticeDetail;
