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
              <Grid item xs={12}>
                {`${ticket.tclass}코스`}
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
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </TicketItemStyle>
  );
};

export default TicketItem;
