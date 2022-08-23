
import validator from '@/middleware/validator';
import TicketService from '@/services/ticket';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_get, async (req, res) => {
  const ticket = await TicketService
    .getInstance()
    .get(req.body['identifier']);

  if(ticket) return res.json(ticket);

  return res.sendStatus(400);
})

export default router;