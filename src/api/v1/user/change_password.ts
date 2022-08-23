import { Router } from "express";
import {UserService} from '@/services/user';
import validator from '@/middleware/validator';
import { IUser } from "@/models/user";

const router = Router();

router.post('/', ...validator.change_password, async (req, res)=> {
  if (!req.user)
    return res.redirect('/api/v1/user/login/web');

  const isSuccess = await UserService.makeInstance()
    .changePassword(
        req.user as IUser,
        req.body['old_password'],
        req.body['new_password']);

  return res.send(`${isSuccess}`);
});

export default router;