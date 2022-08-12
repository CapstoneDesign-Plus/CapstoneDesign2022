import { TicketDTO } from "@/types/dto";

interface TicketModel {

}

interface ITicket {
  identifier : number,
  createdAt? : Date,
  owner : string,
  state : 'normal' | 'waiting' | 'used',
  price : number,
  tclass : 'A' | 'B' | 'C',
}

export class TicketService {
  private ticketModel : TicketModel;

  constructor(ticketModel : any) {
    this.ticketModel = ticketModel;
  }

  async create(ticket : TicketDTO) : Promise<ITicket> {
    
    return {
      identifier: 0,
      owner: 'admin',
      state: 'normal',
      price: 0,
      tclass: 'A',
    }
  }

  async assign(ticketKey : string, userId : string) : Promise<ITicket> {

    return {
      identifier: 0,
      owner: 'admin',
      state: 'normal',
      price: 0,
      tclass: 'A',
    }
  }

  async validate(ticketKey : string) : Promise<boolean> {
    
    return true;
  }

  async refund(ticketKey : string) : Promise<boolean> {

    return true;
  }

  async changeState(ticketKey : string, state : string) : Promise<boolean> {

    return true;
  }

  async get(ticketKey : string) : Promise<ITicket> {

    return {
      identifier: 0,
      owner: 'admin',
      state: 'normal',
      price: 0,
      tclass: 'A',
    }
  }
}