import { Router } from "express";

const router = Router()

/**
 * Api 진입점
 */
router.get('/', (req, res)=> {
  res.send('<h1> Hello! You are in API! </h1>');
});

export default router