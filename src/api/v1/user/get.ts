import { Router } from "express";
import validator from "@/middleware/validator";
import UserService from "@/services/user";

const router = Router();

router.get('/', ...validator.user_get, async (req, res)=> {
  const user = await UserService
    .getInstance()
    .get(req.query['email'] as string);

  if(user) return res.json(user);
  
  return res.sendStatus(400);
})

export default router;