import { Router } from "express";

import Notice from "./notice";
import User from "./user";
import Ticket from "./ticket";
import Log from "./log";

const router = Router();

router.use("/user", User);

router.use("/ticket", Ticket);

router.use("/notice", Notice);

router.use("/log", Log);

export default router;
