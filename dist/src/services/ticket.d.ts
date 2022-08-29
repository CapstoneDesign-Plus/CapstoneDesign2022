import { IRangeResult, TicketClass, TicketState } from "@/types/dto";
import { ITicket } from "@/models/ticket";
import { IUser } from "@/models/user";
export default class TicketService {
    private ticketModel;
    private userService;
    constructor(ticketModel: any, userService: any);
    create(owner: string, tclass: TicketClass): Promise<boolean>;
    /**
     * @param ticketKey
     * @param userId
     * @returns
     */
    assign(caller: IUser, ticketKey: string, userId: string): Promise<boolean>;
    validate(ticketKey: string): Promise<boolean>;
    /**
     * @todo 유저 완전 구현 이후 동작
     * @param ticketKey
     * @returns
     */
    refund(caller: IUser, ticketKey: string): Promise<boolean>;
    changeAllStatue(filter: ITicket, state: TicketState): Promise<void>;
    changeState(ticketKey: string | number, state: TicketState): Promise<void>;
    get(ticketKey: string): Promise<ITicket | null>;
    getHistory(caller: IUser, email: string): Promise<ITicket[] | null>;
    static getInstance(): TicketService;
    information(): Promise<number>;
    /**
     * 페이징
     * @param position 페이지 위치
     * @param interval 한 페이지당 식권 수
     */
    range(position: number, interval: number): Promise<IRangeResult>;
}
