import { Box, List, ListItem } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchNoticeList from "../../lib/fetchNoticeList";
import None from "../MyPage/BuyList/None";

const MNoticeStyle = styled.div`
  .noticeBox {
    width: 95%;
    display: flex;
    justify-content: center;
    margin: 0px;
    margin-top: 10px;
    overflow: hidden;
  }

  .coin {
    width: 30px;
    height: 30px;
  }
`;

function MNotice() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNoticeList(1, 5).then((v) => {
      setNotices(v.values);
    });
  }, []);

  return (
    <MNoticeStyle>
      <Box className="noticeBox">
        <List component="nav">
          <Link to="/Notice">
            <ListItem
              button
              divider
              style={{ color: "black", fontWeight: "bolder" }}
            >
              <img className="coin" alt="coin" src="\images\notice.png" />
              &nbsp;&nbsp;공지사항
            </ListItem>
          </Link>
          {notices &&
            notices.map((n) => (
              <ListItem button divider>
                <Link
                  to={`/NoticeDetail/${n.identifier}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  [{n.header}] {n.title}
                </Link>
              </ListItem>
            ))}
        </List>
      </Box>
    </MNoticeStyle>
  );
}

export default MNotice;
