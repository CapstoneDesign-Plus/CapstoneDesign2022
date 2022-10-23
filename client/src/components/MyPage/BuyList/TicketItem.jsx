import {Accordion, Typography, AccordionSummary, AccordionDetails} from '@mui/material';

const TicketItem = ({ticket, expanded, setExpanded}) => {

  const handleChange =
    (event, newExpanded) => {
      setExpanded(newExpanded ? ticket.identifier : false);
    };

  return (
    <Accordion elevation={5} expanded={expanded} onChange={handleChange}>
      <AccordionSummary>
        <Typography sx={{fontSize:13}}>코스 - {ticket.tclass}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography fontSize={13}>
          코드 - {ticket.identifier}<br/>
          소유자 - {ticket.owner}<br/>
          구매자 - {ticket.buyer}<br/>
          가격 - {ticket.price}<br/>
          코스 - {ticket.tclass}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default TicketItem;