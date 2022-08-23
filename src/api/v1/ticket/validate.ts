import validator from '@/middleware/validator';
import { TicketService } from '@/services/ticket';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_validate, async (req, res) => {
    const isSuccess = await TicketService.makeInstance()
        .validate(req.body['identifier']);
    return res.send(`${isSuccess}`);
})

export default router;