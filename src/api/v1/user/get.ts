import { Router } from "express";
import validator from "@/middleware/validator";

const router = Router();

router.get('/', ...validator.user_get, async (req, res)=> {
  
  res.send('true');
})

export default router;