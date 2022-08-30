/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { IUser } from '@/models/user';
import { IRangeResult, UserDTO } from '@/types/dto';
export default class UserService {
    private userModel;
    constructor(userModel: any);
    signup(user: UserDTO): Promise<boolean>;
    pushTicket(email: string, ticketKey: string): Promise<void>;
    removeTicket(email: string, ticketKey: string): Promise<void>;
    getTickets(email: string): Promise<string[]>;
    login(email: string, password: string): Promise<IUser | null>;
    /**
     * 반드시 delta 값은 point + delta > 0 성립해야함
     * @param email
     * @param delta
     */
    increasePoint(email: string, delta: number): Promise<boolean>;
    getPoint(email: string): Promise<number>;
    isExist(email: string): Promise<boolean>;
    get(email: string): Promise<(IUser & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    /**
     * 사용자 본인 비밀번호 변경
     * @param caller
     * @param oldPassword
     * @param newPassword
     */
    changePassword(caller: IUser, oldPassword: string, newPassword: string): Promise<boolean>;
    /**
     * 관리자용 사용자 비밀번호 변경(비밀번호 재할당 요청)
     * @param caller
     * @param targetEmail
     * @param password
     * @returns
     */
    setPassword(caller: IUser, targetEmail: string, password: string): Promise<boolean>;
    /**
     * 사용자 본인 닉네임 변경
     * @param caller
     * @param oldPassword
     * @param newPassword
     */
    changeUsername(caller: IUser, username: string): Promise<void>;
    static getInstance(): UserService;
    information(): Promise<number>;
    /**
     * 페이징
     * @param position 페이지 위치
     * @param interval 한 페이지당 사용자 수
     */
    range(position: number, interval: number): Promise<IRangeResult>;
}
