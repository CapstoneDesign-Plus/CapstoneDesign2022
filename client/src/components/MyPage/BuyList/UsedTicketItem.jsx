import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
} from "@mui/material";
import styled from "styled-components";

const TicketItemStyle = styled.div`
  .down {
    width: 35px;
  }
  .transfer_btn {
    color: #49663c;
    font-size: 14px;
    font-weight: bolder;
    height: 35px;
    border-radius: 15px;
  }
  .item {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #f2f7f1;
  }
`;
const TicketItem = ({ ticket, expanded, setExpanded }) => {
  const handleChange = (event, newExpanded) => {
    setExpanded(newExpanded ? ticket.identifier : false);
  };

  return (
    <TicketItemStyle>
      <Accordion expanded={expanded} onChange={handleChange} className="item">
        <AccordionSummary className="summary">
          <Typography sx={{ fontSize: 20, fontWeight: "bolder" }}>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                코스 - {ticket.tclass}
              </Grid>

              <Grid item xs={2}>
                <img className="down" src="\images\down.png" />
              </Grid>
            </Grid>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="detail">
          <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
            가격 : {ticket.price}
            <br />
            구매날짜 : <br />
            사용날짜 : <br />
            소유자 : {ticket.owner}
            <br />
            구매자 : {ticket.buyer}
            <br />
            코드번호 : {ticket.identifier}
            <br />
            <br />
            <Button className="transfer_btn" variant="contained">
              양도하기
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </TicketItemStyle>
  );
};

export default TicketItem;
