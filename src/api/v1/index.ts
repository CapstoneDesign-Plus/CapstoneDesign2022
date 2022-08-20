
import { Router } from 'express';

import Notice from './notice';
import User from './user';
import Ticket from './ticket';

const router = Router();

router.use('/user', User);

router.use('/ticket', Ticket);

router.use('/notice', Notice);

export default router;