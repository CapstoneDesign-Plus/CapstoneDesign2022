
import User, { IUser, IUserModel } from '@/models/user';
import { UserDTO } from '@/types/dto';

export default class UserService {
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

  /**
   * 사용자 본인 비밀번호 변경
   * @param caller 
   * @param oldPassword 
   * @param newPassword 
   */
  async changePassword(caller: IUser, oldPassword : string, newPassword : string) : Promise<boolean> {
    if(caller.password === oldPassword) {
      await this.userModel.updateOne({email: caller.email}, {$set:{password: newPassword}});
      return true;
    }
    return false;
  }

  /**
   * 관리자용 사용자 비밀번호 변경(비밀번호 재할당 요청)
   * @param caller 
   * @param targetEmail 
   * @param password 
   * @returns 
   */
  async setPassword(caller: IUser, targetEmail: string, password: string) : Promise<boolean> {
    if(caller.certificated) {
      await this.userModel.updateOne({email: targetEmail}, {$set: {password}});
      return true;
    }
    return false;
  }

  /**
   * 사용자 본인 닉네임 변경
   * @param caller 
   * @param oldPassword 
   * @param newPassword 
   */
  async changeUsername(caller: IUser, username : string) : Promise<void> {
    await this.userModel.updateOne({email: caller.email}, {$set : {username}});
  }

  static getInstance() : UserService {
    return new UserService(User);
  }
}