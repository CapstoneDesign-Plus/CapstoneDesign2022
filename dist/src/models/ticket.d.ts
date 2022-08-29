import { Model, Document } from "mongoose";
import { TicketClass, TicketState } from "@/types/dto";
export interface ITicket extends Document {
    identifier: number;
    owner: string;
    state: TicketState;
    price: number;
    tclass: TicketClass;
    expiredAt: Date;
    createdAt: Date;
}
export interface ITicketModel extends Model<ITicket> {
    findByKey: (key: number) => Promise<ITicket>;
    findByOwner: (owner: string) => Promise<ITicket[]>;
    getAll: () => Promise<ITicket[]>;
}
declare const Ticket: ITicketModel;
export default Ticket;
