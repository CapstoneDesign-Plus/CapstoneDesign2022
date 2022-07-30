import { Router } from "express";
import api from '@/api';

const router = Router();

//#region Api
router.use('/api', api)
//#endregion

//#region Landing
router.use('/', (req,res)=>{
  res.send('<h1> You are in Landing! </h1>');
});
//#endregion

export default router;