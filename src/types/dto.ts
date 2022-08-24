import { INotice } from "@/models/notice";

export interface UserDTO {
  readonly email: string,
  readonly username?: string,
  readonly uclass?: number,
  readonly point?: number,
  readonly tickets: string[],
}

export interface NoticeDTO {
  readonly identifier?: number,
  readonly title: string,
  readonly writer: string,
  readonly numOfView?: number,
  readonly content: string,
  readonly header?: string,
  readonly postedAt?: Date,
  readonly editedAt?: Date,
}

export interface BoardDTO {
  readonly boardId: number,
  readonly boardName: string,
  readonly totalCount: number,
}

export type TicketState = 'normal' | 'waiting' | 'used' | 'refunded' | 'expired';

export type TicketClass = 'A' | 'B' | 'C';
export interface TicketDTO {
  readonly identifier : string,
  readonly createdAt? : Date,
  readonly expiredAt? : Date,
  readonly owner : string,
  readonly state : TicketState,
  readonly price : number,
  readonly tclass : TicketClass,
}

export interface NoticeSearchOption {
  readonly isKeyword: boolean,
  readonly isHeader: boolean,
  readonly isWriter: boolean,
  readonly isPeriod: boolean,
  readonly keyword? : string,
  readonly header? : string,
  readonly writer? : string,
  readonly startedAt? : Date,
  readonly endAt? : Date,
  readonly isSingle: boolean
}

export interface IRangeResult {
  currentPage: number,
  countPerPage: number,
  totalCount: number,
  values : object[],
}

export interface RangeResultDTO {
  readonly currentPage: number,
  readonly countPerPage: number,
  readonly totalCount: number,
  readonly values : object[],
}