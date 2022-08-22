import validator from "@/middleware/validator";
import UserService from '@/services/user';

import { Router } from "express";

const router = Router()

router.get('/', ...validator.user_point_give , async (req, res) => {
  if(typeof req.query['delta'] == 'number'){
    const isSuccess = await UserService
      .getInstance()
      .increasePoint(req.query['email'] as string, req.query['delta']);
    return res.send(`${isSuccess}`)
  }
  return res.send('false');
})


export default router;