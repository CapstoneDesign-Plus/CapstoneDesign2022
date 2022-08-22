import {Router} from 'express';
import {UserService} from '@/services/user';
import User, { IUser } from '@/models/user';
import { TicketService } from '@/services/ticket';
import Ticket from '@/models/ticket';


const router = Router()

router.get('/', async (req, res) => {
  if (!req.user)
    return res.redirect('/api/v1/user/login/web');

  const tickets = await new TicketService(Ticket, new UserService(User))
    .getHistory(req.user as IUser);

  return res.send(tickets);
});

export default router;
