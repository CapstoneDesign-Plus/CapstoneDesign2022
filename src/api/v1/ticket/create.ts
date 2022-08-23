
import validator from '@/middleware/validator';
import { Router } from 'express';
import TicketService from '@/services/ticket';
import { TicketClass } from '@/types/dto';

const router = Router();

router.get('/', ...validator.ticket_create, async (req, res) => {
  const isSuccess = await TicketService
    .getInstance()
    .create(req.query["owner"] as string, req.query["tclass"] as TicketClass);

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
});

export default router;