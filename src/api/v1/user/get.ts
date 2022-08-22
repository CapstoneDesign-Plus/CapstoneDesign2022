import { Router } from "express";
import validator from "@/middleware/validator";
import UserService from "@/services/user";

const router = Router();

router.get('/', ...validator.user_get, async (req, res)=> {
  const user = await UserService
    .getInstance()
    .get(req.query['email'] as string);

  res.send(user);
})

export default router;