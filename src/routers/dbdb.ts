import { Router } from "express";
import Ticket from '@/models/ticket';
import User from '@/models/user';
import { TicketService } from "@/services/ticket";
import { TicketDTO } from "@/types/dto";
import tcrypto from "@/services/tcrypto";
import { UserService } from "@/services/user";

const router = Router();

function getTicketService() {
  return new TicketService(
    Ticket,
    new UserService(User)
  );
}

router.get('/ticket/create', async (req, res)=>{
  const ticket = await getTicketService().create({
    owner: 'me',
    state: 'normal',
    price: 500,
    tclass: 'A'
  } as TicketDTO);

  res.send(`<div>create</div>`);
})

router.get('/ticket/cryto/:number', (req, res) => {
  res.send(`<h1>${tcrypto.cipher(parseInt(req.params.number))}</h1>`);
})

router.post('/ticket/validate', async (req, res) => {
  const successed = await getTicketService().validate(req.body.key as string);

  console.log(successed);

  res.send(`state : ${successed}`);
})

router.get('/ticket/get', async (req, res) =>{
  const ticket = await getTicketService().get(req.query.key as string);

  res.send(ticket?.toJSON());
})

export default router;  