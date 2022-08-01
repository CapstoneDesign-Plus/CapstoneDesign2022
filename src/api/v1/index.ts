
import { Router } from 'express';
import Login from './login';
import Signup from './signup';

const router = Router();

router.use('/login', Login);

router.use('/signup', Signup);

export default router;