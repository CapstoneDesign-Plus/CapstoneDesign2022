
import { IUserModel } from '@/models/user';
import { UserDTO } from '@/types/dto';

export class UserService {
  private userModel : IUserModel;

  constructor(userModel : any) {
    this.userModel = userModel
  }

  async signup(user : UserDTO) {
    if(await this.userModel.create(user)) return true;
    return false;
  }

  async pushTicket(email : string, ticketKey : string) {
    const tickets = await this.getTickets(email);

    tickets.push(ticketKey);

    await this.userModel.updateOne({email}, {$set: {tickets}});
  }

  async removeTicket(email : string, ticketKey : string) {
    const tickets = (await this.getTickets(email)).filter((value)=> {
      return value !== ticketKey;
    })

    await this.userModel.updateOne({email}, {$set : {tickets}});
  }

  async getTickets(email : string) {
    const user = await this.get(email);

    return user?.tickets || [];
  }

  async login(user : UserDTO) {
    const result = await this.userModel.findOne({email: user.email, password: user.password});

    console.log(result);

    if(result) return result;
    return null;
  }

  /**
   * 반드시 delta 값은 point + delta > 0 성립해야함
   * @param email 
   * @param delta 
   */
  async increasePoint(email : string, delta : number) {
    const calcedPoint = await this.getPoint(email) + delta;

    if(calcedPoint < 0) return false;

    await this.userModel.updateOne({email}, {$set: {point : calcedPoint}});

    return true;
  }

  async getPoint(email : string) {
    const user = await this.get(email);

    return user?.point || 0;
  }

  async isExist(email: string) {
    if(!email) return false;

    if(await this.get(email as string)) return true;
    return false;
  }

  async get(email: string) {
    return await this.userModel.findOne({email});
  }
}