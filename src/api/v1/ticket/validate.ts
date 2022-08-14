
import validator from '@/middleware/validator';
import Ticket from '@/models/ticket';
import User from '@/models/user';
import { TicketService } from '@/services/ticket';
import { UserService } from '@/services/user';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_validate, async (req, res) => {
    const isSuccess = await new TicketService(Ticket, new UserService(User))
        .validate(req.body['identifier']);
    res.send(`${isSuccess}`);
})

export default router;