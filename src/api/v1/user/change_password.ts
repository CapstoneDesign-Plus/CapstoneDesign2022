import { Router } from "express";
import UserService from '@/services/user';
import validator from '@/middleware/validator';
import { IUser } from "@/models/user";

const router = Router();

router.post('/', ...validator.user_change_password, async (req, res)=> {
  
  if (!req.user) return res.redirect('/api/v1/user/login/web');

  const isSuccess = await UserService
    .getInstance()
    .changePassword(req.user as IUser,
        req.body['old_password'],
        req.body['new_password']);

  if(isSuccess) return res.sendStatus(200);

  return res.sendStatus(400);
});

export default router;