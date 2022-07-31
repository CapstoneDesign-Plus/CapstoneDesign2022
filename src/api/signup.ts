import { Router } from "express";
import UserService from '@/services/user';
import validator from '@/middleware/validator/singup';
import { validationResult } from 'express-validator';
import { UserDTO } from "@/types";

const router = Router();

router.post('/', ...validator, async (req, res)=> {
  console.log(req.body)

  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }

  if(await UserService.Signup(req.body as UserDTO)) return res.json({ result: true });
  return res.json({ result: false });
});


export default router;