import { Router } from "express";
import v1 from './v1';

const router = Router()

/**
 * Api 진입점
 */
router.get('/', (req, res)=> {
  return res.send('<h1> Hello! You are in API! </h1>');
});

router.use('/v1', v1);

export default router