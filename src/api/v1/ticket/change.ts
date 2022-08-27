
import validator from '@/middleware/validator';
import TicketService from '@/services/ticket';
import { Router } from 'express';
import { IUser } from '@/models/user';

const router = Router();

router.put('/state', ...validator.ticket_change_state, async (req, res) => {
  await TicketService
    .getInstance()
    .changeState(req.body['identifier'], req.body['state']);
  return res.sendStatus(200);
})

router.put('/owner', ...validator.ticket_assign, async (req, res) => {
  if(req.user){
    const isSuccess = await TicketService
      .getInstance()
      .assign(req.user as IUser, req.body['identifier'], req.body['to']);
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
})

export default router;