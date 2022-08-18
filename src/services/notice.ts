
import { INotice, INoticeModel } from "@/models/notice";
import { IUser } from "@/models/user";
import { NoticeDTO, NoticeSearchOption } from "@/types/dto";
import { UserService } from "./user";

export class NoticeService {
  private noticeModel : INoticeModel;

  constructor(noticeModel: any) {
    this.noticeModel = noticeModel;
  }

  /**
   * 글 수정
   * @param caller 
   * @param notice 
   * @returns 
   */
  async update(caller : IUser, notice: NoticeDTO) : Promise<boolean> {

    if(caller.certificated
      && await this.noticeModel.updateOne({identifier : notice.identifier}, {$set: {title: notice.title, content: notice.content, header: notice.header, editedAt: Date.now()}})) {
      return true;
    }
    return false;
  }

  /**
   * 글 삭제
   * @param caller 
   * @param identifier 
   * @returns 
   */
  async delete(caller : IUser, identifier: number) : Promise<boolean> {

    if(caller.certificated && await this.noticeModel.remove({identifier})) {
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
  async get(caller : IUser, identifier: number) : Promise<INotice | null> {
    const article = await this.noticeModel.findOneAndUpdate({identifier}, {$inc: {numOfView: 1}});

    return article;
  }

  /**
   * 글 게시
   * @param caller 
   * @param notice 
   * @returns identifier
   */
  async post(caller : IUser, notice : NoticeDTO) : Promise<number> {
    if(caller.certificated) {
      const article = await this.noticeModel.create(notice);
      if(article) return article.identifier;
    }
    return -1;
  }

  /**
   * 게시글 검색
   * @param query 
   * @returns 
   */
  async search(option : NoticeSearchOption) : Promise<INotice[]> {

    const articles = await this.noticeModel.find({
      
    });

    return articles;
  }

  

  async information() : Promise<number> {
    return await this.noticeModel.find({}).count();
  }

  /**
   * 페이징
   * @param position 페이지 위치
   * @param interval 한 페이지당 게시글 수
   */
  async range(position : number, interval: number) : Promise<INotice[]> {
    
    return [];
  }
}