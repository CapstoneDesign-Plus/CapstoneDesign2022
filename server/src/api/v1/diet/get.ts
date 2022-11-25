import DietService from "@/services/diet";
import { send } from "@/services/sender";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const table = await DietService.getInstance().getDiet();
  send(res, table, table);
});

router.get("/crawl", async (req, res) => {
  await DietService.getInstance().crawl();
  send(res, true);
});

export default router;
