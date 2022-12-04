import { ILog } from "@/models/log";
import { INotice } from "@/models/notice";
import { ITicket } from "@/models/ticket";
import { IToken } from "@/models/token";
import { IUser } from "@/models/user";
import {
  IRangeResult,
  LogDTO,
  NoticeDTO,
  RangeResultDTO,
  TicketClass,
  TicketDTO,
  TokenDTO,
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
      tickets: user.tickets.map(tcrypto.cipher),
      admin: user.certificated,
      createdAt: user.createdAt,
      password: user.password,
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

  parseTokenDTOArray(tokens: IToken[]): TokenDTO[] {
    return tokens.map((u) => {
      return this.parseTokenDTO(u);
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
      owner: ticket.owner,
      state: ticket.state,
      price: ticket.price,
      tclass: ticket.tclass,
      buyer: ticket.buyer,
      usedAt: ticket.usedAt,
    };
  },

  parseLogDTO(log: ILog): LogDTO {
    return {
      identifier: log.identifier,
      timestamp: log.timestamp,
      path: log.path,
      content: log.content,
      ip: log.ip,
      caller: log.caller,
      method: log.method,
    };
  },

  parseTokenDTO(token: IToken): TokenDTO {
    return {
      identifier: token.identifier,
      createdAt: token.createdAt,
      expiredAt: token.expiredAt,
      email: token.email,
    };
  },

  parseTicketDTOArray(tickets: ITicket[]): TicketDTO[] {
    return tickets.map((t) => {
      return this.parseTicketDTO(t);
    });
  },

  parseLogDTOArray(logs: ILog[]): LogDTO[] {
    return logs.map((l) => {
      return this.parseLogDTO(l);
    });
  },

  parseNoticeRangeResult(rangeResult: IRangeResult): RangeResultDTO {
    return {
      ...rangeResult,
      values: this.parseNoticeDTOArray(rangeResult.values as INotice[]),
    };
  },

  parseTokenRangeResult(rangeResult: IRangeResult): RangeResultDTO {
    return {
      ...rangeResult,
      values: this.parseTokenDTOArray(rangeResult.values as IToken[]),
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

  parseLogRangeResult(rangeResult: IRangeResult): RangeResultDTO {
    return {
      ...rangeResult,
      values: this.parseLogDTOArray(rangeResult.values as ILog[]),
    };
  },

  parseUsedTicketRecord(ticket: ITicket) {
    return {
      tclass: ticket.tclass,
      usedAt: ticket.usedAt,
    };
  },

  parseUsedTicketRecordArray(tickets: ITicket[]) {
    return tickets.map(this.parseUsedTicketRecord);
  },
};
