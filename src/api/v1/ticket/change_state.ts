
import validator from '@/middleware/validator';
import Ticket from '@/models/ticket';
import User from '@/models/user';
import { TicketService } from '@/services/ticket';
import { UserService } from '@/services/user';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_change_state, async (req, res) => {
    await new TicketService(Ticket, new UserService(User))
        .changeState(req.body['identifier'], req.body['state']);
        return res.send('state changing');
})

export default router;