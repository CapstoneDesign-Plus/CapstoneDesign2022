import validator from "@/middleware/validator";
import NoticeService from "@/services/notice";
import { send } from "@/services/sender";
import translate from "@/services/translate";
import { NoticeSearchOption } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.get("/search", async (req, res) => {
  const articles = await NoticeService.getInstance().search(
    req.body as NoticeSearchOption
  );

  return send(res, articles, articles);
});

router.get("/list", async (req, res) => {
  const rangeResult = await NoticeService.getInstance().range(
    parseInt(req.query.page as string),
    parseInt(req.query.per as string)
  );

  return send(
    res,
    rangeResult,
    rangeResult && translate.parseNoticeRangeResult(rangeResult)
  );
});

router.get("/:id", ...validator.notice_get, async (req, res) => {
  const article = await NoticeService.getInstance().get(
    null,
    parseInt(req.params.id)
  );

  return send(res, article, article);
});

export default router;
