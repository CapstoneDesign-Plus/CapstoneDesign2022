import { Router } from "express";
import api from '@/api';
import env from "@/config";

const router = Router();

//#region Api
router.use('/api', api)
//#endregion
export default router;