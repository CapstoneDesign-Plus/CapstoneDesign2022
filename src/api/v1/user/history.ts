import {Router} from 'express';
import { IUser } from '@/models/user';
import TicketService from '@/services/ticket';


const router = Router()

router.get('/', async (req, res) => {
  if (!req.user)
    return res.redirect('/api/v1/user/login/web');

  const tickets = await TicketService
    .getInstance()
    .getHistory(req.user as IUser);

  return res.send(tickets);
});

export default router;
