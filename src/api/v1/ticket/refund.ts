
import validator from '@/middleware/validator';
import Ticket from '@/models/ticket';
import User, { IUser } from '@/models/user';
import { TicketService } from '@/services/ticket';
import { UserService } from '@/services/user';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_refund, async (req, res) => {
  if(req.user){
    const isSuccess = await new TicketService(Ticket, new UserService(User))
        .refund(req.user as IUser, req.body['identifier']);
    return res.send(`${isSuccess}`);
  }
  return res.send('fail')
})

export default router;