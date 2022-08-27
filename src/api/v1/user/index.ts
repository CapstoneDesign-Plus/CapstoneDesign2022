import { Router } from 'express';

import Auth from './auth';
import Get from './get';
import Change from './change';
import History from './history';

const router = Router();

router.use('/get', Get);
router.use('/change', Change);
router.use('/auth', Auth);
router.use('/history', History);

export default router;