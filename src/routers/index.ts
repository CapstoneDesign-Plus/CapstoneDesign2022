import { Router } from "express";
import api from '@/api';

const router = Router();

//#region Api
router.use('/api', api)
//#endregion

//#region Landing
router.get('/', (req,res)=>{
  res.send('<h1> You are in Landing! </h1>');
});
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