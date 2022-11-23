import { Router } from "express";

import Change from "./change";
import Create from "./create";
import Get from "./get";
import Refund from "./refund";
import Validate from "./validate";
import Use from "./use";
import Delete from "./delete";

const router = Router();

router.use("/use", Use);
router.use("/change", Change);
router.use("/create", Create);
router.use("/get", Get);
router.use("/refund", Refund);
router.use("/validate", Validate);
router.use("/delete", Delete);

export default router;
