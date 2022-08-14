
import validator from '@/middleware/validator';
import { Router } from 'express';

const router = Router();

router.post('/assign', ...validator.ticket_assign, async (req, res) => {
    
})

export default router;