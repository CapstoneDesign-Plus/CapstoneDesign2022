import { TicketDTO } from "@/types/dto";
import { ITicketModel, ITicket } from "@/models/ticket";


export class TicketService {
  private ticketModel : ITicketModel;

  constructor(ticketModel : any) {
    this.ticketModel = ticketModel;
  }

  async create(ticket : TicketDTO) : Promise<ITicket> {
    const nticket = await this.ticketModel.create(ticket);
    return nticket;
  }

  async assign(ticketKey : number, userId : string) : Promise<ITicket | null> {

    const ticket = await this.ticketModel.findOneAndUpdate({identifier: ticketKey}, {owner: userId});

    return ticket;
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

  async get(ticketKey : number) : Promise<ITicket> {
    const ticket = await this.ticketModel.findByKey(ticketKey);

    return ticket;
  }
}