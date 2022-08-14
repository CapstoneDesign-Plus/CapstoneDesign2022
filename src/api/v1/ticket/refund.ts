
import validator from '@/middleware/validator';
import { Router } from 'express';

const router = Router();

router.post('/refund', ...validator.ticket_refund, async (req, res) => {
    
})

export default router;