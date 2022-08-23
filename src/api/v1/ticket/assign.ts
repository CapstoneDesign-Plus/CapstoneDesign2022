import validator from '@/middleware/validator';
import { IUser } from '@/models/user';
import { TicketService } from '@/services/ticket';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_assign, async (req, res) => {
  if(req.user){
    const isSuccess = await TicketService.makeInstance()
      .assign(req.user as IUser, req.body['identifier'], req.body['to']);
    return res.send(`you ${isSuccess}`);
  }
  return res.send('fail');
})

router.get('/', (req, res) => {
  return res.send(`<!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>test</title>
  </head>
  <body>
  
    <form action="/api/v1/ticket/assign" method="post">
      ID : <input type="text" name="identifier"><br>
      TO : <input type="text" name="to"><br>
          <input type="submit">
    </form>
  
  </body>
  </html>`);
})

export default router;