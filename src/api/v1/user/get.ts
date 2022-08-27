import { Router } from "express";
import validator from "@/middleware/validator";
import UserService from "@/services/user";
import translate from "@/services/translate";

const router = Router();

router.get('/list', async (req, res) => {
  const rangeResult = await UserService
    .getInstance()
    .range(
      parseInt(req.query.page as string),
      parseInt(req.query.per as string)
    );

  if(rangeResult) return res.json(
    translate.parseUserRangeResult(rangeResult)
  );

  return res.sendStatus(400);
})


router.get('/:email', ...validator.user_get, async (req, res)=> {
  const user = await UserService
    .getInstance()
    .get(req.params.email as string);

  if(user) return res.json(user);
  
  return res.sendStatus(400);
})

export default router;