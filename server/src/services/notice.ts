import Notice, { INotice, INoticeModel } from "@/models/notice";
import { IUser } from "@/models/user";
import { IRangeResult, NoticeDTO, NoticeSearchOption } from "@/types/dto";
import { FilterQuery } from "mongoose";

export default class NoticeService {
  private noticeModel: INoticeModel;

  constructor(noticeModel: any) {
    this.noticeModel = noticeModel;
  }

  /**
   * 글 수정
   * @param caller
   * @param notice
   * @returns
   */
  async update(caller: IUser, notice: NoticeDTO): Promise<number> {
    if (
      caller.certificated &&
      (await this.noticeModel.updateOne(
        { identifier: notice.identifier },
        {
          $set: {
            title: notice.title,
            content: notice.content,
            header: notice.header,
            editedAt: Date.now(),
          },
        }
      ))
    ) {
      if (notice.identifier) return notice.identifier;
    }
    return -1;
  }

  /**
   * 글 삭제
   * @param caller
   * @param identifier
   * @returns
   */
  async delete(caller: IUser, identifier: number): Promise<boolean> {
    if (
      caller.certificated &&
      (await this.noticeModel.deleteOne({ identifier }))
    ) {
      return true;
    }
    return false;
  }

  /**
   * 글 조회
   * @param caller
   * @param identifier
   * @returns
   */
  async get(caller: IUser | null, identifier: number): Promise<INotice | null> {
    const article = await this.noticeModel.findOneAndUpdate(
      { identifier },
      { $inc: { numOfView: 1 } }
    );

    return article;
  }

  /**
   * 글 게시
   * @param caller
   * @param notice
   * @returns identifier
   */
  async post(caller: IUser, notice: NoticeDTO): Promise<number> {
    if (caller.certificated) {
      const article = await this.noticeModel.create({
        writer: caller.email,
        title: notice.title,
        content: notice.content,
        header: notice.header,
      });
      if (article) return article.identifier;
    }
    return -1;
  }

  /**
   * 게시글 검색
   * @param query
   * @returns
   */
  async search(option: NoticeSearchOption): Promise<INotice[]> {
    return await this.noticeModel.find(this.translateOptionToFilter(option));
  }

  translateOptionToFilter(option: NoticeSearchOption): FilterQuery<INotice> {
    const filter: FilterQuery<INotice> = {};

    if (option.isKeyword)
      filter.title = { $regex: option.keyword, $options: "i" };

    if (option.isWriter)
      filter.writer = { $regex: option.writer, $options: "i" };

    if (option.isHeader) filter.header = option.header;

    if (option.isPeriod)
      filter.postedAt = { $gte: option.startedAt, $lte: option.endAt };

    return filter;
  }

  async information(): Promise<number> {
    return await this.noticeModel.find({}).count();
  }

  /**
   * 페이징
   * @param position 페이지 위치
   * @param interval 한 페이지당 게시글 수
   */
  async range(position: number, interval: number): Promise<IRangeResult> {
    return {
      values: await this.noticeModel
        .find()
        .sort({ _id: -1 })
        .skip((position - 1) * interval)
        .limit(interval),
      totalCount: await this.information(),
      currentPage: position,
      countPerPage: interval,
    };
  }

  static getInstance(): NoticeService {
    return new NoticeService(Notice);
  }

  async deleteAll(ids: number[]) {
    await this.noticeModel.deleteMany({
      identifier: { $in: ids },
    });
  }
}
