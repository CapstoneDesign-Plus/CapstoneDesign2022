import { Router } from "express";
import NoticeService from "@/services/notice";

const router = Router();

router.get('/', async (req, res) => {
  const articles = await NoticeService
    .getInstance()
    .range(
      parseInt(req.query.page as string),
      parseInt(req.query.per as string)
    );

  if(articles) return res.json(articles);

  return res.sendStatus(400);
})

export default router;