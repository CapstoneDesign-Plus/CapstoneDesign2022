
import validator from '@/middleware/validator';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_validate, async (req, res) => {
    
})

export default router;