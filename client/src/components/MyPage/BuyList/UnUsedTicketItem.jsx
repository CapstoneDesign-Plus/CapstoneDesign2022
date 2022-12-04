import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useModal from "../../../hook/useModal";
import deleteRefund from "../../../lib/deleteRefund";
import RefundModal from "./RefundModal";

const TicketItemStyle = styled.div`
  margin-left: 20px;
  .btn {
    color: #49663c;
    margin-left: 10px;
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
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
const TicketItem = ({ ticket, expanded, setExpanded }) => {
  const { isOpen, toggle } = useModal();

  const handleChange = (event, newExpanded) => {
    setExpanded(newExpanded ? ticket.identifier : false);
  };

  const handleClick = (v) => () => {
    deleteRefund(v).then((v) => {
      console.log("환불 완료!");
    });
    toggle();
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
              <Link to={`/Transfer/${encodeURIComponent(ticket.identifier)}`}>
                <Button className="btn" variant="contained">
                  양도
                </Button>
              </Link>
              <Button
                className="btn"
                variant="contained"
                onClick={handleClick(encodeURIComponent(ticket.identifier))}
              >
                환불
              </Button>
              <div>
                {isOpen && (
                  <RefundModal
                    isOpen={isOpen}
                    toggle={toggle}
                    tclass={ticket.tclass}
                  />
                )}
              </div>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </TicketItemStyle>
  );
};

export default TicketItem;
