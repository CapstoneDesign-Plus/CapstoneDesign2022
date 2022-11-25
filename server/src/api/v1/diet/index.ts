import { Router } from "express";

import Get from "./get";

const router = Router();

router.use("/get", Get);

export default router;
