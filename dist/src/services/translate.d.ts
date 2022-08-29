import { INotice } from "@/models/notice";
import { ITicket } from "@/models/ticket";
import { IUser } from "@/models/user";
import { IRangeResult, NoticeDTO, RangeResultDTO, TicketDTO, UserDTO } from "@/types/dto";
declare const _default: {
    parseUserDTO(user: IUser): UserDTO;
    parseUserDTOArray(users: IUser[]): UserDTO[];
    parseNoticeDTO(notice: INotice): NoticeDTO;
    parseNoticeDTOArray(notices: INotice[]): NoticeDTO[];
    parseTicketDTO(ticket: ITicket): TicketDTO;
    parseTicketDTOArray(tickets: ITicket[]): TicketDTO[];
    parseNoticeRangeResult(rangeResult: IRangeResult): RangeResultDTO;
    parseTicketRangeResult(rangeResult: IRangeResult): RangeResultDTO;
    parseUserRangeResult(rangeResult: IRangeResult): RangeResultDTO;
};
export default _default;
