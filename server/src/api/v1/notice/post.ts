import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import NoticeService from "@/services/notice";
import { invalidPermission, Permission, send } from "@/services/sender";
import { NoticeDTO } from "@/types/dto";
import { Router } from "express";

const router = Router();

router.post("/", ...validator.notice_post, async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  const identifier = await NoticeService.getInstance().post(
    req.user as IUser,
    req.body as NoticeDTO
  );

  return send(res, identifier, identifier);
});

export default router;
