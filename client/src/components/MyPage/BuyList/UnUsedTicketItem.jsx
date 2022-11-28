import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
  Box,
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
  .btnBox {
    width: 90%;
    display: flex;
    justify-content: flex-end;
  }
`;
const TicketItem = ({ ticket, expanded, setExpanded }) => {
  const handleChange = (event, newExpanded) => {
    setExpanded(newExpanded ? ticket.identifier : false);
  };

  const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "short" });

  return (
    <TicketItemStyle>
      <Accordion expanded={expanded} onChange={handleChange} className="item">
        <AccordionSummary className="summary">
          <Typography sx={{ fontSize: 20, fontWeight: "bolder" }}>
            <Grid container spacing={2}>
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
            구매 날짜 : {koDtf.format(ticket.createdAt)}
            <br />
            소유자 : {ticket.owner}
            <br />
            구매자 : {ticket.buyer}
            <br />
            <br />
            <Box className="btnBox">
              <Button className="transfer_btn" variant="contained">
                양도하기
              </Button>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </TicketItemStyle>
  );
};

export default TicketItem;
