
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

router.get('/', (req, res) => {
  return res.send(`<!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>test</title>
  </head>
  <body>
  
    <form action="/api/v1/ticket/refund" method="post">
      ID : <input type="text" name="identifier"><br>
      <input type="submit">
    </form>
  
  </body>
  </html>`);
})

export default router;