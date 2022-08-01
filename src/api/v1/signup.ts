import { Router } from "express";
import UserService from '@/services/user';
import validator from '@/middleware/validator';
import User from "@/models/user";

const router = Router();

router.post('/', ...validator.singup, async (req, res)=> {

  const isSuccess = await new UserService(User).Signup(req.body);

  return res.json({isSuccess});
});

export default router;