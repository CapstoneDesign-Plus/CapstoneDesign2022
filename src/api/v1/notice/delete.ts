import validator from "@/middleware/validator";
import Notice from "@/models/notice";
import { IUser } from "@/models/user";
import { NoticeService } from "@/services/notice";
import { Router } from "express";

const router = Router()

router.get('/:id', ...validator.notice_delete, async (req, res) => {
    if(req.user){
      await new NoticeService(Notice).delete(req.user as IUser,  parseInt(req.params.id));
      return res.redirect(`/`);
    }
    return res.redirect('/login');
  });

  export default router;