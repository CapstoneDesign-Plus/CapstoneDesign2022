import validator from "@/middleware/validator";
import UserService from '@/services/user';

import { Router } from "express";

const router = Router()

router.get('/', ...validator.user_point_give , async (req, res) => {
  if(typeof req.query['delta'] == 'number'){
    const isSuccess = await UserService
      .getInstance()
      .increasePoint(req.query['email'] as string, req.query['delta']);

    if(isSuccess) return res.sendStatus(200);
  }
  return res.sendStatus(400);
})


export default router;