import validator from "@/middleware/validator";
import NoticeService from "@/services/notice";
import translate from "@/services/translate";
import { NoticeSearchOption } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.get('/:id', ...validator.notice_get, async (req, res) => {
  const article = await NoticeService
    .getInstance()
    .get(null, parseInt(req.params.id));
    
  if(article) return res.json(article);

  return res.sendStatus(400);
});

router.get('/list', async (req, res) => {
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

router.get('/search', async (req, res) => {
  const articles = await NoticeService
    .getInstance()
    .search(req.body as NoticeSearchOption);

  if(articles) return res.json(articles);

  return res.sendStatus(400);
})


export default router;