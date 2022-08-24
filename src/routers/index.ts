import { Router } from "express";
import api from '@/api';

const router = Router();

//#region Landing
router.get('/', (req,res)=>{
  return res.sendFile(process.cwd() + '/admin/index.html');
});

router.post('/', (req, res)=>{
  return res.send(200);
})
//#endregion

//#region Api
router.use('/api', api)
//#endregion

router.get('/loginSuc', (req, res)=> {
  return res.send('<h1> Login Success </h1>');
})

router.get('/loginFail', (req, res)=> {
  return res.send('<h1> Login Fail </h1>');
})

export default router;