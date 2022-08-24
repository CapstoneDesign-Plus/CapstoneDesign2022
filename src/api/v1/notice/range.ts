import { Router } from "express";
import NoticeService from "@/services/notice";
import translate from "@/services/translate";

const router = Router();

router.get('/', async (req, res) => {
  const rangeResult = await NoticeService
    .getInstance()
    .range(
      parseInt(req.query.page as string),
      parseInt(req.query.per as string)
    );

  if(rangeResult) return res.json(
    translate.parseNoticeRangeResult(rangeResult)
  );

  return res.sendStatus(400);
})

export default router;