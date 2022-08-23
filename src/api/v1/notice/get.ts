import validator from "@/middleware/validator";
import NoticeService from "@/services/notice";
import { Router } from "express";

const router = Router();

router.get('/:id', ...validator.notice_get, async (req, res) => {
  const article = await NoticeService
    .getInstance()
    .get(null, parseInt(req.params.id));
    
  if(article) return res.json(article);

  return res.sendStatus(400);
});

export default router;