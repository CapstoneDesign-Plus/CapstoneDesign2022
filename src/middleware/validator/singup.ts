import { body } from 'express-validator';

export default [
  body('username').exists(),
  body('password').exists().isLength({max: 20, min: 10}),
  body('email').exists().isEmail(),
];