import TicketService from "@/services/ticket";
import WaitService from "@/services/wait";
import { Router } from "express";

const router = Router();

router.get("/:type", async (req, res) => {
  const type: "0" | "1" = req.params.type as "0" | "1";
  const key = decodeURIComponent(req.query.id as string);

  let success;

  switch (type) {
    case "0":
      success = await TicketService.getInstance().use(key, "wait");
      if (success) WaitService.getInstance().append(key, success.tclass);
      break;
    case "1":
      success = await TicketService.getInstance().use(key, "use");
      if (success) WaitService.getInstance().delete(key);
      break;
  }

  return res.send(success ? "T" : "F");
});

export default router;
