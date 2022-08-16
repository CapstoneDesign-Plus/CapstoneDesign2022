import { Router } from 'express';

import Login from './login';
import SignUp from './signup';
import Get from './get';

const router = Router();

router.use('/get', Get);

router.use('/login', Login);

router.use('/signup', SignUp)

export default router;