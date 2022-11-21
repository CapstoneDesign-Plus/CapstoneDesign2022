import { Router } from "express";

import Notice from "./notice";
import User from "./user";
import Ticket from "./ticket";
import Log from "./log";
import Stats from "./stats";

const router = Router();

router.use("/user", User);

router.use("/ticket", Ticket);

router.use("/notice", Notice);

router.use("/log", Log);

router.use("/stats", Stats);

export default router;
