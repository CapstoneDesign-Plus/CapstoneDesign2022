import { Router } from "express";
import Delete from "./delete";
import Get from "./get";
import Post from "./post";
import Update from "./update";
import Search from './search';
import Range from './range';

const router = Router()

router.use('/delete', Delete);
router.use('/get', Get);
router.use('/post', Post);
router.use('/update', Update);
router.use('/range', Range);
router.use('/search', Search);

export default router;