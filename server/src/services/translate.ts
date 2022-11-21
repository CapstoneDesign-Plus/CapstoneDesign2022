import { INotice } from "@/models/notice";
import { ITicket } from "@/models/ticket";
import { IUser } from "@/models/user";
import {
  IRangeResult,
  NoticeDTO,
  RangeResultDTO,
  TicketClass,
  TicketDTO,
  UserDTO,
} from "@/types/dto";
import tcrypto from "./tcrypto";

export default {
  parseUserDTO(user: IUser): UserDTO {
    return {
      email: user.email,
      username: user.username,
      uclass: user.uclass,
      point: user.point,
      tickets: user.tickets,
      admin: user.certificated,
      createdAt: user.createdAt,
    };
  },

  parseUserDTOAdmin(user: IUser) {
    return {
      email: user.email,
      username: user.username,
      uclass: user.uclass,
      point: user.point,
      tickets: user.tickets,
      admin: user.certificated,
      createAt: user.createdAt,
    };
  },

  parseUserDTOArrayAdmin(users: IUser[]) {
    return users.map((u) => this.parseUserDTOAdmin(u));
  },

  parseUserDTOArray(users: IUser[]): UserDTO[] {
    return users.map((u) => {
      return this.parseUserDTO(u);
    });
  },

  parseNoticeDTO(notice: INotice): NoticeDTO {
    return {
      identifier: notice.identifier,
      title: notice.title,
      writer: notice.writer,
      numOfView: notice.numOfView,
      content: notice.content,
      header: notice.header,
      postedAt: notice.postedAt,
      editedAt: notice.editedAt,
    };
  },

  parseNoticeDTOArray(notices: INotice[]): NoticeDTO[] {
    return notices.map((n) => {
      return this.parseNoticeDTO(n);
    });
  },

  parseTicketDTO(ticket: ITicket): TicketDTO {
    return {
      identifier: tcrypto.cipher(ticket.identifier),
      createdAt: ticket.createdAt,
      expiredAt: ticket.expiredAt,
      owner: ticket.owner,
      state: ticket.state,
      price: ticket.price,
      tclass: ticket.tclass,
      buyer: ticket.buyer,
    };
  },

  parseTicketDTOArray(tickets: ITicket[]): TicketDTO[] {
    return tickets.map((t) => {
      return this.parseTicketDTO(t);
    });
  },

  parseNoticeRangeResult(rangeResult: IRangeResult): RangeResultDTO {
    return {
      ...rangeResult,
      values: this.parseNoticeDTOArray(rangeResult.values as INotice[]),
    };
  },

  parseTicketRangeResult(rangeResult: IRangeResult): RangeResultDTO {
    return {
      ...rangeResult,
      values: this.parseTicketDTOArray(rangeResult.values as ITicket[]),
    };
  },

  parseUserRangeResult(rangeResult: IRangeResult): RangeResultDTO {
    return {
      ...rangeResult,
      values: this.parseUserDTOArray(rangeResult.values as IUser[]),
    };
  },

  parseUsedTicketRecord(ticket: ITicket) {
    return {
      tclass: ticket.tclass,
      usedAt: ticket.usedAt
    }
  },

  parseUsedTicketRecordArray(tickets: ITicket[]) {
    return tickets.map(this.parseUsedTicketRecord);
  }
};
