
import { Router } from 'express';
import Assign from './assign';
import ChangeState from './change_state';
import Create from './create';
import Get from './get';
import Refund from './refund';
import Validate from './validate';

const router = Router();

router.use('/assign', Assign);
router.use('/change_state',ChangeState);
router.use('/create', Create);
router.use('/get',Get);
router.use('/refund', Refund);
router.use('/validate', Validate);

export default router;