
import validator from '@/middleware/validator';
import { Router } from 'express';

const router = Router();

router.post('/change_state', ...validator.ticket_change_state, async (req, res) => {
    
})

export default router;