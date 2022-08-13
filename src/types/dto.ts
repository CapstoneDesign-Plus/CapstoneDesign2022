
export interface UserDTO {
  readonly email: string,
  readonly username?: string,
  readonly uclass?: number,
  readonly point?: number,
  readonly password : string,
}

export interface NoticeDTO {
  readonly identifier: number,
  readonly title: string,
  readonly writer: string,
  readonly content: string,
  readonly header?: string,
  readonly postedAt?: Date,
  readonly revisedAt?: Date,
}

export type TicketState = 'normal' | 'waiting' | 'used' | 'refunded' | 'expired';

export type TicketClass = 'A' | 'B' | 'C';
export interface TicketDTO {
  readonly identifier? : number,
  readonly createdAt? : Date,
  readonly expiredAt? : Date,
  readonly owner : string,
  readonly state : TicketState,
  readonly price : number,
  readonly tclass : TicketClass,
}