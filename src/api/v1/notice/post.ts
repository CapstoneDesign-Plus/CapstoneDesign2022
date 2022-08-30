import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import NoticeService from "@/services/notice";
import { NoticeDTO } from "@/types/dto";
import { Router } from "express";

const router = Router()

router.post('/', ...validator.notice_post, async (req, res) => {
  if(req.user){
    const identifier = await NoticeService
      .getInstance()
      .post(req.user as IUser, req.body as NoticeDTO);

    return res.json({identifier});
  }

  return res.sendStatus(400);
});
  
export default router;