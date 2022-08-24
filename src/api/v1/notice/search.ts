import { Router } from "express";
import NoticeService from "@/services/notice";
import { NoticeSearchOption } from "@/types/dto";

const router = Router();

router.get('/', async (req, res) => {
  const articles = await NoticeService
    .getInstance()
    .search(req.body as NoticeSearchOption);

  if(articles) return res.json(articles);

  return res.sendStatus(400);
})

export default router;