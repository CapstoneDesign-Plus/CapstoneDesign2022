import validator from '@/middleware/validator';
import { Router } from 'express';
import { TicketService } from '@/services/ticket';
import { TicketClass } from '@/types/dto';

const router = Router();

router.get('/', ...validator.ticket_create, async (req, res) => {
    const isSuccess = await TicketService.makeInstance()
      .create(req.query["owner"] as string, req.query["tclass"] as TicketClass);
    return res.send(`${isSuccess}`)
});

export default router;