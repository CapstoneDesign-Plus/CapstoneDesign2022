
import validator from '@/middleware/validator';
import { IUser } from '@/models/user';
import TicketService from '@/services/ticket';
import { Router } from 'express';

const router = Router();

router.delete('/', ...validator.ticket_refund, async (req, res) => {
  if(req.user){
    const isSuccess = await TicketService
      .getInstance()
      .refund(req.user as IUser, req.body['identifier']);

    if(isSuccess) return res.sendStatus(200);
  }

  return res.sendStatus(400);
})

export default router;