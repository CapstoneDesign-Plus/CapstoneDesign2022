import {Router} from 'express';
import { IUser } from '@/models/user';
import TicketService from '@/services/ticket';
import validator from '@/middleware/validator';


const router = Router()

router.get('/', ...validator.user_history, async (req, res) => {
  if (!req.user)
    return res.redirect('/api/v1/user/login/web');

  const tickets = await TicketService
    .getInstance()
    .getHistory(req.user as IUser, req.query['email'] as string);

  if(tickets) return res.json(tickets);
  
  return res.sendStatus(400);
});

export default router;
