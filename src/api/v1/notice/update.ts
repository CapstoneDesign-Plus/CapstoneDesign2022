import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import NoticeService from "@/services/notice";
import { NoticeDTO } from "@/types/dto";
import { Router } from "express";

const router = Router()

router.put('/', ...validator.notice_update, async (req, res) => {
  console.log('hello');

  if(req.user){
    if(req.body.identifier) {
      console.log(req.body.identifier);
      req.body.identifier = parseInt(req.body.identifier);
    }

    const success = await NoticeService
      .getInstance()
      .update(req.user as IUser, req.body as NoticeDTO);

    if(success) return res.sendStatus(200);
  }
  return res.sendStatus(400);
});
  
export default router;