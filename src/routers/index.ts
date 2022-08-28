import { Router } from "express";
import api from '@/api';
import env from "@/config";

const router = Router();

router.post('/', (req, res)=>{
  return res.send(200);
})
//#endregion

//#region Api
router.use('/api', api)
//#endregion

//#region Landing
router.get('/', (req,res)=>{
  return res.sendFile(env.ROOT_PATH + '/react-public/index.html');
});

export default router;