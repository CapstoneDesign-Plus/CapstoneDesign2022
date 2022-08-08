import { NextFunction, Request, Response } from 'express';
import { body, param, validationResult } from 'express-validator';

function ValidateErrorHandler(
  req : Request, 
  res : Response, 
  next : NextFunction) {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()});
  }
  next();
}

const singup = [
  body('username').exists(),
  body('password').isLength({max: 20, min: 10}),
  body('email').isEmail(),
  ValidateErrorHandler
];

const login = [
  body('email').exists(),
  body('password').exists(),
  ValidateErrorHandler
];

const notice_post = [
  body('title').exists(),
  body('content').exists(),
  body('header').exists(),
  ValidateErrorHandler
];

const notice_update = [
  body('identifier').exists(),
  body('title').exists(),
  body('content').exists(),
  body('header').exists(),
  ValidateErrorHandler
]

const notice_get = [
  param('identifier').exists(),
  ValidateErrorHandler
];

export default {
  singup,
  login,
  notice_get,
  notice_post,
  notice_update
}