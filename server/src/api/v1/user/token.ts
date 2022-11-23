import { send } from "@/services/sender";
import TokenService from "@/services/token";
import translate from "@/services/translate";
import { TokenSearchOption } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.post("/search", async (req, res) => {
  const tokens = await TokenService.getInstance().search(
    req.body as TokenSearchOption
  );

  return send(res, tokens, translate.parseTokenDTOArray(tokens));
});

router.get("/list", async (req, res) => {
  const rangeResult = await TokenService.getInstance().range(
    parseInt(req.query.page as string),
    parseInt(req.query.per as string)
  );

  if (rangeResult)
    send(res, true, translate.parseTokenRangeResult(rangeResult));

  return send(res, false);
});

export default router;
