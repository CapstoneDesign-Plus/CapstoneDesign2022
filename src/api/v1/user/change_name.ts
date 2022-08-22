import { Router } from "express";
import UserService from '@/services/user';
import validator from '@/middleware/validator';
import { IUser } from "@/models/user";

const router = Router();

router.get('/', ...validator.change_name, async (req, res)=> {
  if (!req.user)
    return res.redirect('/api/v1/user/login/web');

  await UserService
    .getInstance()
    .changeUsername(req.user as IUser, req.query['new_name'] as string);

  return res.send('success');
});

export default router;