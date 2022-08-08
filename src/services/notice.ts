
import { NoticeModel } from "@/models/notice";
import { NoticeDTO } from "@/types/dto";

export class NoticeService {
  private noticeModel : NoticeModel;

  constructor(noticeModel: NoticeModel) {
    this.noticeModel = noticeModel;
  }

  async Update(notice: NoticeDTO) {

  }

  async Delete(identifier: Number) {

  }

  async Post(notice : NoticeDTO) {

  }
  /**
   * todo
   */
  async Search(query : {}) {

  }

  async Range(range : {position : number, interval: number}) {
    
  }
}