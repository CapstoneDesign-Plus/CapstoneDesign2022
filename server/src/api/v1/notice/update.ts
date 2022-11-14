import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import NoticeService from "@/services/notice";
import { invalidPermission, Permission, send } from "@/services/sender";
import { NoticeDTO } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.put("/", ...validator.notice_update, async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  let success = 0;
  try {
    if (req.body.identifier) {
      req.body.identifier = parseInt(req.body.identifier);
    }

    success = await NoticeService.getInstance().update(
      req.user as IUser,
      req.body as NoticeDTO
    );
  } catch {}
  return send(res, success);
});

export default router;
