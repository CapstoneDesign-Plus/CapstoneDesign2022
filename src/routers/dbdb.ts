import { Router } from "express";
import Ticket from '@/models/ticket';
import { TicketService } from "@/services/ticket";
import { TicketDTO } from "@/types/dto";

const router = Router();

router.get('/ticket_create', async (req, res)=>{
  const ticket = new TicketService(Ticket).create({
    owner: 'me',
    state: 'normal',
    price: 500,
    tclass: 'A'
  } as TicketDTO);

  res.send(`<div>${JSON.stringify(ticket)}</div>`);
})

export default router;  