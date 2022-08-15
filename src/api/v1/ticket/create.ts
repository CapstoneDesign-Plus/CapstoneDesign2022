
import validator from '@/middleware/validator';
import { Router } from 'express';
import Ticket from '@/models/ticket';
import { TicketService } from '@/services/ticket';
import { UserService } from '@/services/user';
import User from '@/models/user';
import { TicketClass } from '@/types/dto';

const router = Router();

router.get('/', ...validator.ticket_create, async (req, res) => {
    const isSuccess = await new TicketService(Ticket, new UserService(User))
        .create(req.query["owner"] as string, req.query["tclass"] as TicketClass);
    return res.send(`${isSuccess}`)
});

export default router;