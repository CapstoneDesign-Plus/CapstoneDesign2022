import  {Box, List, ListItem} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from "styled-components";

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
`

function MNotice() {
  return (
    <MNoticeStyle>
    <Box className="noticeBox">
          <List component="nav">
            <Link to="/Notice">
              <ListItem button divider style={{color:'black', fontWeight:'bolder'}}>
                <img className="coin" alt="coin" src="\images\coin.png" />
                &nbsp;&nbsp;공지사항
              </ListItem>
            </Link>
            <ListItem button divider>
              [공지] 밥심 사용방법
            </ListItem>
            <ListItem button divider>
              [공지] 오늘 저녁 식단 변경 사항 알림
            </ListItem>
            <ListItem button divider>
              [공지] 밥심 포인트 사용 및 충전 방법
            </ListItem>
          </List>
        </Box>
        </MNoticeStyle>
  )
}

export default MNotice;