import validator from "@/middleware/validator";
import Notice from "@/models/notice";
import { NoticeService } from "@/services/notice";
import { Router } from "express";

const router = Router();

router.get('/:id', ...validator.notice_get, async (req, res) => {
    const article = await new NoticeService(Notice).get(null, parseInt(req.params.id));
    
    return res.send(article);
  });

export default router;