import validator from "@/middleware/validator";
import { IUser } from "@/models/user";
import NoticeService from "@/services/notice";
import { invalidPermission, Permission, send } from "@/services/sender";
import { Router } from "express";

const router = Router();

router.delete("/:id", ...validator.notice_delete, async (req, res) => {
  if (!req.user || !req.user.certificated)
    return invalidPermission(res, Permission.ADMIN);

  const isSuccess = await NoticeService.getInstance().delete(
    req.user as IUser,
    parseInt(req.params.id)
  );
  return send(res, isSuccess);
});

export default router;
