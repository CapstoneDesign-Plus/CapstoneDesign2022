
import { INotice, NoticeModel } from "@/models/notice";
import { IUser } from "@/models/user";
import { NoticeDTO, NoticeSearchOption } from "@/types/dto";
import { UserService } from "./user";

export class NoticeService {
  private noticeModel : NoticeModel;
  private userService : UserService;

  constructor(noticeModel: any, userService : any) {
    this.noticeModel = noticeModel;
    this.userService = userService;
  }

  /**
   * 글 수정
   * @param caller 
   * @param notice 
   * @returns 
   */
  async update(caller : IUser, notice: NoticeDTO) : Promise<boolean> {

    return false;
  }

  /**
   * 글 삭제
   * @param caller 
   * @param identifier 
   * @returns 
   */
  async delete(caller : IUser, identifier: number) : Promise<boolean> {

    return false;
  }

  /**
   * 글 조회
   * @param caller 
   * @param identifier 
   * @returns 
   */
  async get(caller : IUser, identifier: number) : Promise<NoticeDTO | null> {

    return null;
  }

  /**
   * 글 게시
   * @param caller 
   * @param notice 
   * @returns 
   */
  async post(caller : IUser, notice : NoticeDTO) : Promise<NoticeDTO | null> {

    return null;
  }

  /**
   * 게시글 검색
   * @param query 
   * @returns 
   */
  async search(option : NoticeSearchOption) : Promise<NoticeDTO[]> {

    return [];
  }

  /**
   * 페이징
   * @param position 페이지 위치
   * @param interval 한 페이지당 게시글 수
   */
  async range(position : number, interval: number) : Promise<NoticeDTO[]> {
    
    return [];
  }
}