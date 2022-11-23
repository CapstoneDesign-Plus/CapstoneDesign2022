import { NextFunction, Request, Response } from "express";
import { body, param, query, validationResult } from "express-validator";

function ValidateErrorHandler(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

const user_signup = [
  body("username").exists(),
  body("password").exists(),
  body("email").isEmail(),
  ValidateErrorHandler,
];

const user_login = [
  body("email").isEmail(),
  body("password").exists(),
  ValidateErrorHandler,
];

const user_get = [param("email").isEmail(), ValidateErrorHandler];

const notice_post = [
  body("title").exists(),
  body("content").exists(),
  body("header").exists(),
  ValidateErrorHandler,
];

const notice_update = [
  body("identifier").exists(),
  body("title").exists(),
  body("content").exists(),
  body("header").exists(),
  ValidateErrorHandler,
];

const notice_delete = [param("id").exists(), ValidateErrorHandler];

const notice_all_delete = [
  body("ids").exists().isArray(),
  ValidateErrorHandler,
];

const ticket_all_delete = [
  body("ids").exists().isArray(),
  ValidateErrorHandler,
];

const users_all_delete = [body("ids").exists().isArray(), ValidateErrorHandler];

const token_all_delete = [body("ids").exists().isArray(), ValidateErrorHandler];

const notice_get = [param("id").exists(), ValidateErrorHandler];

const ticket_create = [
  body("owner").exists(),
  body("tclass").exists(),
  ValidateErrorHandler,
];

const ticket_get = [body("identifier").exists(), ValidateErrorHandler];

const ticket_assign = [
  body("identifier").exists(),
  body("to").exists(),
  ValidateErrorHandler,
];

const ticket_validate = [body("identifier").exists(), ValidateErrorHandler];

const ticket_refund = [body("identifier").exists(), ValidateErrorHandler];

const ticket_change_state = [
  body("identifier").exists(),
  body("state").exists(),
  ValidateErrorHandler,
];

const user_point_give = [
  query("email").exists(),
  query("delta").isInt(),
  ValidateErrorHandler,
];

const user_change_name = [query("new_name").exists(), ValidateErrorHandler];

const user_change_password = [
  body("old_password").exists(),
  body("new_password").exists(),
  ValidateErrorHandler,
];

const user_get_reset_password = [
  query("email").isEmail(),
  ValidateErrorHandler,
];

const user_put_reset_password = [
  body("new_password").exists(),
  ValidateErrorHandler,
];

const user_history = [param("email").isEmail(), ValidateErrorHandler];

const stats_day_used = [query("range").exists(), ValidateErrorHandler];

export default {
  token_all_delete,
  users_all_delete,
  ticket_all_delete,
  notice_all_delete,
  user_put_reset_password,
  user_get_reset_password,
  user_signup,
  user_login,
  user_get,
  user_point_give,
  user_change_name,
  user_change_password,
  user_history,
  notice_get,
  notice_post,
  notice_update,
  notice_delete,
  ticket_create,
  ticket_get,
  ticket_assign,
  ticket_validate,
  ticket_refund,
  ticket_change_state,
  stats_day_used,
};
