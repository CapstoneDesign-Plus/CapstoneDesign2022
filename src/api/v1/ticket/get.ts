
import validator from '@/middleware/validator';
import { TicketService } from '@/services/ticket';
import { UserService } from '@/services/user';
import { Router } from 'express';
import Ticket from '@/models/ticket';
import User from '@/models/user';

const router = Router();

router.post('/', ...validator.ticket_get, async (req, res) => {
    const ticket = await new TicketService(Ticket, new UserService(User))
        .get(req.body['identifier']);
    res.send(ticket);
})

export default router;