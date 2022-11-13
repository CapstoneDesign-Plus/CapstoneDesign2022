export interface UserDTO {
  readonly email: string;
  readonly username?: string;
  readonly uclass?: number;
  readonly point?: number;
  readonly tickets: string[];
}

export interface NoticeDTO {
  readonly title: string;
  readonly writer?: string;
  readonly content: string;
  readonly header: string;
  readonly numOfView?: number;
  readonly identifier?: number;
  readonly postedAt?: Date;
  readonly editedAt?: Date;
}

export interface BoardDTO {
  readonly boardId: number;
  readonly boardName: string;
  readonly totalCount: number;
}

export type TicketState =
  | "normal"
  | "waiting"
  | "used"
  | "refunded"
  | "expired";

export type TicketClass = "A" | "B" | "C";
export interface TicketDTO {
  readonly identifier: string;
  readonly createdAt?: Date;
  readonly expiredAt?: Date;
  readonly owner: string;
  readonly state: TicketState;
  readonly price: number;
  readonly tclass: TicketClass;
  readonly buyer: string;
}

export interface NoticeSearchOption {
  readonly isKeyword: boolean;
  readonly isHeader: boolean;
  readonly isWriter: boolean;
  readonly isPeriod: boolean;
  readonly keyword?: string;
  readonly header?: string;
  readonly writer?: string;
  readonly startedAt?: Date;
  readonly endAt?: Date;
}

export interface UserSearchOption {
  readonly isEmail: boolean;
  readonly isAdmin: boolean;
  readonly isNickName: boolean;
  readonly isPeriod: boolean;
  readonly email?: string;
  readonly bvAdmin?: boolean;
  readonly nickName?: string;
  readonly startedAt?: Date;
  readonly endAt?: Date;
}

export interface TicketSearchOption {
  readonly isTClass: boolean;
  readonly isPrice: boolean;
  readonly isBuyer: boolean;
  readonly isOwner: boolean;
  readonly isCreatePeriod: boolean;
  readonly isExpiredPeriod: boolean;
  readonly tClass?: string;
  readonly owner?: string;
  readonly buyer?: string;
  readonly createStartedAt?: Date;
  readonly createEndAt?: Date;
  readonly expiredStartedAt?: Date;
  readonly expiredEndAt?: Date;
  readonly startedPrice?: number;
  readonly endPrice?: number;
}

export interface IRangeResult {
  currentPage: number;
  countPerPage: number;
  totalCount: number;
  values: object[];
}

export interface RangeResultDTO {
  readonly currentPage: number;
  readonly countPerPage: number;
  readonly totalCount: number;
  readonly values: object[];
}
