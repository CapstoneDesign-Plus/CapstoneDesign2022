import { Router } from "express";
import UserService from '@/services/user';
import validator from '@/middleware/validator';

const router = Router();

router.post('/', ...validator.user_signup, async (req, res)=> {
  const isSuccess = await UserService
    .getInstance()
    .signup(req.body);

  return res.json({isSuccess});
});

export default router;