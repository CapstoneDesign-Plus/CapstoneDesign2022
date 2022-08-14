
import { Router } from 'express';
import Assign from './assign';
import ChangeState from './change_state';
import Create from './create';
import Get from './get';
import Refund from './refund';
import Validate from './validate';

const router = Router();

router.use(Assign);
router.use(ChangeState);
router.use(Create);
router.use(Get);
router.use(Refund);
router.use(Validate);

router.get('/', (req, res) => {
    res.send('<h1>Ticket Index</h1>')
})

export default router;