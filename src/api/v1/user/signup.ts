import { Router } from "express";
import {UserService} from '@/services/user';
import validator from '@/middleware/validator';

const router = Router();

router.post('/', ...validator.signup, async (req, res)=> {

  const isSuccess = await UserService.makeInstance().signup(req.body);

  return res.json({isSuccess});
});

export default router;