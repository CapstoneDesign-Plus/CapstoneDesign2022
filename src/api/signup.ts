import { Router } from "express";
import UserService from '@/services/user';
import validator from '@/middleware/validator';
import { UserDTO } from "@/types";

const router = Router();

router.post('/', ...validator.singup, async (req, res)=> {

  const isSuccess = await UserService.Signup(req.body as UserDTO);

  return res.json({isSuccess})
});

export default router;