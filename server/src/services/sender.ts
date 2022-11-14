import { Response } from "express";

type Permission = "none" | "user" | "admin";

const Permission = {
  NONE: "NONE",
  USER: "USER",
  ADMIN: "ADMIN",
};

function invalidPermission(response: Response, permission: string) {
  response.send(`This Api require permission : ${permission}`);
}

function send(response: Response, ok: any, value: any = null) {
  response.json({
    ok: ok ? true : false,
    result: value,
  });
}

function serverError(response: Response, error: any) {
  response.sendStatus(500);
}

export { invalidPermission, send, Permission, serverError };
