import { Router } from "express";
import {UserService} from '@/services/user';
import validator from '@/middleware/validator';
import User, { IUser } from "@/models/user";

const router = Router();

router.post('/', ...validator.change_password, async (req, res)=> {

  const isSuccess = await new UserService(User)
    .changePassword(req.user as IUser,
        req.body['old_password'],
        req.body['new_password']);

  return res.send(`${isSuccess}`);
});

export default router;