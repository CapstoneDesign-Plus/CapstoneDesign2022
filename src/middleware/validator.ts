import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

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
]

const login = [
  body('email').exists(),
  body('password').exists(),
  ValidateErrorHandler
]

export default {
  singup,
  login
}