import { Router } from 'express';

import Login from './login';
import SignUp from './signup';
import Get from './get';
import Range from './range';

const router = Router();

router.use('/get', Get);
router.use('/login', Login);
router.use('/range', Range);
router.use('/signup', SignUp)

export default router;