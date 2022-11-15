import TicketService from "@/services/ticket";
import { Router } from "express";

const router = Router();

router.get("/:type", async (req, res) => {
  const type: "0" | "1" = req.params.type as "0" | "1";
  const key = decodeURIComponent(req.query.id as string);

  let success = false;

  switch (type) {
    case "0":
      success = await TicketService.getInstance().use(key, "wait");
      break;
    case "1":
      success = await TicketService.getInstance().use(key, "use");
      break;
  }

  return res.send(success ? "T" : "F");
});

export default router;
