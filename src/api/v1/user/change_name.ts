import { Router } from "express";
import {UserService} from '@/services/user';
import validator from '@/middleware/validator';
import User, { IUser } from "@/models/user";

const router = Router();

router.get('/', ...validator.change_name, async (req, res)=> {

  await new UserService(User)
    .changeUsername(req.user as IUser, req.query['new_name'] as string);

  return res.send('success');
});

export default router;