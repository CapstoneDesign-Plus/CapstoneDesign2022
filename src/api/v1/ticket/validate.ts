
import validator from '@/middleware/validator';
import TicketService from '@/services/ticket';
import { Router } from 'express';

const router = Router();

router.get('/', ...validator.ticket_validate, async (req, res) => {
  const isSuccess = await TicketService
    .getInstance()
    .validate(req.body['identifier']);

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(200);
})

export default router;