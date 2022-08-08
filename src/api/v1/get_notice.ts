import { Router } from "express";
import Notice from "@/models/notice";
import validator from "@/middleware/validator";
import { NoticeService } from "@/services/notice";

const router = Router();

/**
 * 글 게시
 */
router.post('/post', ...validator.notice_post, (req, res)=> {
  
});

/**
 * 글 조회
 */
router.get('/:id' , ...validator.notice_get , (req, res)=> {

});

/**
 * 글 수정
 */
router.get('/update', ...validator.notice_update, (req, res)=> {

});

export default router;