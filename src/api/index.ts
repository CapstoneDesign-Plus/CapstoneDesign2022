import { Router } from "express";
import Signup from './signup';

const router = Router()

/**
 * Api 진입점
 */
router.get('/', (req, res)=> {
  res.send('<h1> Hello! You are in API! </h1>');
});

router.use('/login', Signup);

export default router