import { TicketClass, TicketDTO, TicketState } from "@/types/dto";
import { ITicketModel, ITicket } from "@/models/ticket";
import tcrypto from "./tcrypto";
import {UserService} from "@/services/user";
import { IUser } from "@/models/user";


export class TicketService {
  private ticketModel : ITicketModel;
  private userService : UserService;

  constructor(ticketModel : any, userService : any) {
    this.ticketModel = ticketModel;
    this.userService = userService;
  }

  async create(owner: string, tclass: TicketClass) : Promise<boolean> {
    if(await this.userService.isExist(owner)){
      const nticket = await this.ticketModel.create({
        owner: owner,
        tclass: tclass,
        price: 0,
        state: 'normal'
      });
      await this.userService.pushTicket(owner, tcrypto.cipher(nticket.identifier));
      return true;
    }
    return false;
  }

  /**
   * @param ticketKey 
   * @param userId 
   * @returns 
   */
  async assign(caller : IUser, ticketKey : string, userId : string) : Promise<boolean> {
    const oldTicket = await this.get(ticketKey);

    if(!oldTicket) return false;

    if(!(caller.certificated || caller.email === oldTicket.owner)) return false;

    if(!(await this.userService.isExist(userId))) return false;

    await this.userService.removeTicket(oldTicket.owner, ticketKey);
    await this.userService.pushTicket(userId, ticketKey);
    await this.ticketModel.findOneAndUpdate({identifier: oldTicket.identifier}, {owner: userId});

    return true;
  }

  async validate(ticketKey : string) : Promise<boolean> {
    if(await this.get(ticketKey)) return true;
    return false;
  }

  /**
   * @todo 유저 완전 구현 이후 동작
   * @param ticketKey 
   * @returns 
   */
  async refund(caller : IUser, ticketKey : string) : Promise<boolean> {
    const ticket = await this.get(ticketKey);

    if(!ticket) return false;

    if(!(caller.certificated || caller.email === ticket.owner)) return false;

    if(ticket.state !== 'normal') return false;
    
    const price = ticket.price;

    await this.changeState(ticket.identifier, 'refunded');
    await this.userService.increasePoint(ticket.owner, price);
    await this.userService.removeTicket(ticket.owner, ticketKey);

    return true;
  }

  async changeAllStatue(filter : ITicket, state: TicketState) {
    await this.ticketModel.updateMany(filter as Object, {state});
  }

  async changeState(ticketKey : string | number, state : TicketState) : Promise<void> {
    const key = (typeof ticketKey === "number") ? ticketKey : tcrypto.decipher(ticketKey);
    await this.ticketModel.updateOne({identifier: key}, {state});
  }

  async get(ticketKey : string) : Promise<ITicket | null> {
    try{
      const decodeKey = tcrypto.decipher(ticketKey);
      return await this.ticketModel.findByKey(decodeKey);
    }catch{
      return null;
    }
  }
}