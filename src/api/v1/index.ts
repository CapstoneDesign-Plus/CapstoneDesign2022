
import { Router } from 'express';
import Login from './login';
import Signup from './signup';
import Ticket from './ticket';

const router = Router();

router.use('/login', Login);

router.use('/signup', Signup);

router.use('/ticket', Ticket);

export default router;