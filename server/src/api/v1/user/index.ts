import { Router } from "express";

import Auth from "./auth";
import Get from "./get";
import Change from "./change";
import Point from "./point";
import History from "./history";
import Token from "./token";
import Delete from "./delete";

const router = Router();

router.use("/get", Get);
router.use("/change", Change);
router.use("/auth", Auth);
router.use("/point", Point);
router.use("/history", History);
router.use("/delete", Delete);
router.use("/token", Token);

export default router;
