
export interface UserDTO {
  readonly email: string,
  readonly username?: string,
  readonly uclass?: number,
  readonly point?: number,
  readonly password? : string,
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
export interface TicketDTO {
  readonly id? : string,
  readonly createdAt? : Date,
  readonly owner : string,
  readonly state : 'normal' | 'waiting' | 'used',
  readonly price : number,
  readonly tclass : 'A' | 'B' | 'C',
}