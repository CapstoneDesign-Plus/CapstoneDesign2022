import { Router } from "express";
import UserService from "@/services/user";
import translate from "@/services/translate";

const router = Router();

router.get('/', async (req, res) => {
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

export default router;