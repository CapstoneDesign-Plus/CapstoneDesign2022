import { Router } from "express";
import api from '@/api';
import testdbdb from '@/routers/dbdb';

const router = Router();

//#region Api
router.use('/api', api)
//#endregion

router.use('/db', testdbdb);

//#region Landing
router.get('/', (req,res)=>{
  res.send('<h1> You are in Landing! </h1>');
});

router.post('/', (req, res)=>{
  res.send(200);
})
//#endregion

router.get('/loginSuc', (req, res)=> {
  res.send('<h1> Login Success </h1>');
})

router.get('/loginFail', (req, res)=> {
  res.send('<h1> Login Fail </h1>');
})

router.use((req, res, next)=>{
  res.status(404).send('<h1>No Page</h1>');
})

export default router;