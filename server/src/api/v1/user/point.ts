import validator from "@/middleware/validator";
import UserService from '@/services/user';

import { Router } from "express";

const router = Router()

router.get('/', ...validator.user_point_give , async (req, res) => {

  try{
    const delta = parseInt(req.query['delta'] as string);

    const isSuccess = await UserService
      .getInstance()
      .increasePoint(req.query['email'] as string, delta);
  
    return res.sendStatus(isSuccess ? 200 : 400);
  }catch{
    return res.sendStatus(400);
  }
})


export default router;