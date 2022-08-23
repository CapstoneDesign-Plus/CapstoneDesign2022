
import validator from '@/middleware/validator';
import TicketService from '@/services/ticket';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_change_state, async (req, res) => {
  await TicketService
    .getInstance()
    .changeState(req.body['identifier'], req.body['state']);
  return res.sendStatus(200);
})

export default router;