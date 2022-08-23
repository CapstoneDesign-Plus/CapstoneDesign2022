
import validator from '@/middleware/validator';
import { IUser } from '@/models/user';
import TicketService from '@/services/ticket';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_refund, async (req, res) => {
  if(req.user){
    const isSuccess = await TicketService
      .getInstance()
      .refund(req.user as IUser, req.body['identifier']);

    if(isSuccess) return res.sendStatus(200);
  }

  return res.sendStatus(400);
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