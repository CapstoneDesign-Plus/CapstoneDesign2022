import { Router } from "express";

import Notice from "./notice";
import User from "./user";
import Ticket from "./ticket";
import Log from "./log";
import Stats from "./stats";
import Diet from "./diet";

const router = Router();

router.use("/user", User);

router.use("/ticket", Ticket);

router.use("/notice", Notice);

router.use("/log", Log);

router.use("/stats", Stats);

router.use("/diet", Diet);

export default router;
