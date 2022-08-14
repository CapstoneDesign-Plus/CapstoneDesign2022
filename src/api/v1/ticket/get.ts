
import validator from '@/middleware/validator';
import { Router } from 'express';

const router = Router();

router.post('/', ...validator.ticket_get, async (req, res) => {
    
})

export default router;