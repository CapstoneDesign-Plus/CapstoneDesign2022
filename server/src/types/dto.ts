export interface UserDTO {
  readonly email: string;
  readonly username?: string;
  readonly admin: boolean;
  readonly uclass?: number;
  readonly point?: number;
  readonly tickets: string[];
  readonly createdAt: number;
  readonly password: string;
}

export interface LogDTO {
  identifier: number;
  timestamp: number;
  path: string;
  content: string;
  ip: string;
  caller: string;
  method: string;
}

export interface TokenDTO {
  readonly identifier: number;
  readonly expiredAt: number;
  readonly createdAt: number;
  readonly email: string;
}

export interface NoticeDTO {
  readonly title: string;
  readonly writer?: string;
  readonly content: string;
  readonly header: string;
  readonly numOfView?: number;
  readonly identifier?: number;
  readonly postedAt?: number;
  readonly editedAt?: number;
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
  readonly createdAt?: number;
  readonly owner: string;
  readonly state: TicketState;
  readonly price: number;
  readonly tclass: TicketClass;
  readonly buyer: string;
  readonly usedAt: number;
}

export interface NoticeSearchOption {
  readonly isKeyword: boolean;
  readonly isHeader: boolean;
  readonly isWriter: boolean;
  readonly isPeriod: boolean;
  readonly keyword?: string;
  readonly header?: string;
  readonly writer?: string;
  readonly startedAt?: number;
  readonly endAt?: number;
}

export interface TokenSearchOption {
  readonly isCaller: boolean;
  readonly isCreatedPeriod: boolean;
  readonly isExpiredPeriod: boolean;
  readonly identifier: number;
  readonly expiredStartedAt?: number;
  readonly expiredEndAt?: number;
  readonly createdStartedAt?: number;
  readonly createdEndAt?: number;
  readonly caller: string;
}

export interface UserSearchOption {
  readonly isEmail: boolean;
  readonly isAdmin: boolean;
  readonly isNickName: boolean;
  readonly isPeriod: boolean;
  readonly email?: string;
  readonly bvAdmin?: boolean;
  readonly nickName?: string;
  readonly startedAt?: number;
  readonly endAt?: number;
}

export interface TicketSearchOption {
  readonly isTClass: boolean;
  readonly isPrice: boolean;
  readonly isBuyer: boolean;
  readonly isOwner: boolean;
  readonly isState: boolean;
  readonly isCreatedPeriod: boolean;
  readonly isUsedPeriod: boolean;
  readonly tClass?: string;
  readonly owner?: string;
  readonly buyer?: string;
  readonly createdStartedAt?: number;
  readonly createdEndAt?: number;
  readonly usedStartedAt?: number;
  readonly usedEndAt?: number;
  readonly startedPrice?: number;
  readonly endPrice?: number;
  readonly state?: string;
}

export interface LogSearchOption {
  readonly isPath: boolean;
  readonly isIp: boolean;
  readonly isCaller: boolean;
  readonly isMethod: boolean;
  readonly isPeriod: boolean;
  readonly isContent: boolean;
  readonly startedAt: number;
  readonly endAt: number;
  readonly path: string;
  readonly content: string;
  readonly ip: string;
  readonly caller: string;
  readonly method: string;
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

export interface UsedTicketRecord {
  readonly tclass: TicketClass;
  readonly usedAt: number;
}

export type UsedTicketSearchRange = "7d" | "30d" | "3m" | "1y";
