import { INotice } from "@/models/notice";
import { IUser } from "@/models/user";
import { IRangeResult, NoticeDTO, NoticeSearchOption } from "@/types/dto";
import { FilterQuery } from "mongoose";
export default class NoticeService {
    private noticeModel;
    constructor(noticeModel: any);
    /**
     * 글 수정
     * @param caller
     * @param notice
     * @returns
     */
    update(caller: IUser, notice: NoticeDTO): Promise<number>;
    /**
     * 글 삭제
     * @param caller
     * @param identifier
     * @returns
     */
    delete(caller: IUser, identifier: number): Promise<boolean>;
    /**
     * 글 조회
     * @param caller
     * @param identifier
     * @returns
     */
    get(caller: IUser | null, identifier: number): Promise<INotice | null>;
    /**
     * 글 게시
     * @param caller
     * @param notice
     * @returns identifier
     */
    post(caller: IUser, notice: NoticeDTO): Promise<number>;
    /**
     * 게시글 검색
     * @param query
     * @returns
     */
    search(option: NoticeSearchOption): Promise<INotice[]>;
    translateOptionToFilter(option: NoticeSearchOption): FilterQuery<INotice>;
    information(): Promise<number>;
    /**
     * 페이징
     * @param position 페이지 위치
     * @param interval 한 페이지당 게시글 수
     */
    range(position: number, interval: number): Promise<IRangeResult>;
    static getInstance(): NoticeService;
}
