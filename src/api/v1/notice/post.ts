import validator from "@/middleware/validator";
import Notice from "@/models/notice";
import { IUser } from "@/models/user";
import { NoticeService } from "@/services/notice";
import { NoticeDTO } from "@/types/dto";
import { Router } from "express";

const router = Router()

router.post('/', ...validator.notice_post, async (req, res) => {
    if(req.user){
      const identifier = await new NoticeService(Notice).post(req.user as IUser, req.body as NoticeDTO);
  
      return res.redirect(`/api/v1/notice/get/${identifier}`);
    }
    return res.redirect('/login');
});
  
router.get('/', async (req, res) => {
    return res.send(`<html>
    <head>
        <title>Hello</title>
    </head>
    <body>
        <form action="/api/t/post" method="post">
        header = <input type="text" name="header" id=""> 
        title = <input type="text" name="title" id="">
        content = <input type="text" name="content" id="">
        <input type="submit" value="submit">
        </form>
    </body>

    </html>`);
});
  
export default router;