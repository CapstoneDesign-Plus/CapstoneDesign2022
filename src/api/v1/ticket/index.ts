
import { Router } from 'express';

import Change from './change';
import Create from './create';
import Get from './get';
import Refund from './refund';
import Validate from './validate';

const router = Router();

router.use('/change', Change);
router.use('/create', Create);
router.use('/get', Get);
router.use('/refund', Refund);
router.use('/validate', Validate);

export default router;