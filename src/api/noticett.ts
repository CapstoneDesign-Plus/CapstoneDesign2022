import Notice from "@/models/notice";
import { IUser } from "@/models/user";
import { NoticeService } from "@/services/notice";
import { NoticeDTO } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.get('/get/:id', async (req, res) => {
  const article = await new NoticeService(Notice).get(null, parseInt(req.params.id));
  
  return res.send(article);
});

router.post('/post', async (req, res) => {
  if(req.user){
    const identifier = await new NoticeService(Notice).post(req.user as IUser, req.body as NoticeDTO);

    return res.redirect(`/api/t/get/${identifier}`);
  }
  return res.redirect('/login');
});

router.get('/post', async (req, res) => {
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
})

router.post('/update', async (req, res) => {
  if(req.user){
    if(req.body.identifier) {
      console.log(req.body.identifier);
      req.body.identifier = parseInt(req.body.identifier);
    }

    const identifier = await new NoticeService(Notice).update(req.user as IUser, req.body as NoticeDTO);

    return res.redirect(`/api/t/get/${identifier}`);
  }
  return res.redirect('/login');
});

router.get('/update', async (req, res) => {
  return res.send(`<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <form action="/api/t/update" method="post">
      id = <input type="number" name="identifier" id=""> 
      header = <input type="text" name="header" id=""> 
      title = <input type="text" name="title" id="">
      content = <input type="text" name="content" id="">
      <input type="submit" value="submit">
    </form>
  </body>
  
  </html>`);
})

router.get('/delete/:id', async (req, res) => {
  if(req.user){
    await new NoticeService(Notice).delete(req.user as IUser,  parseInt(req.params.id));
    return res.redirect(`/`);
  }
  return res.redirect('/login');
});


export default router;