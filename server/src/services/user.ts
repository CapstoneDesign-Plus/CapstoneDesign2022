import User, { IUser, IUserModel } from "@/models/user";
import { IRangeResult, UserDTO, UserSearchOption } from "@/types/dto";
import { FilterQuery } from "mongoose";

export default class UserService {
  private userModel: IUserModel;

  constructor(userModel: any) {
    this.userModel = userModel;
  }

  async signup(user: UserDTO) {
    if (await this.isExist(user.email)) return false;

    if (await this.userModel.create(user)) return true;
    return false;
  }

  async empower(email: string, isEmpower: boolean) {
    this.userModel.updateOne({ email }, { $set: { certificated: isEmpower } });
  }

  async pushTicket(email: string, ticketKey: string) {
    const tickets = await this.getTickets(email);

    tickets.push(ticketKey);

    await this.userModel.updateOne({ email }, { $set: { tickets } });
  }

  async removeTicket(email: string, ticketKey: string) {
    const tickets = (await this.getTickets(email)).filter((value) => {
      return value !== ticketKey;
    });

    await this.userModel.updateOne({ email }, { $set: { tickets } });
  }

  async getTickets(email: string) {
    const user = await this.get(email);

    return user?.tickets || [];
  }

  async login(email: string, password: string): Promise<IUser | null> {
    const result = await this.userModel.findOne({
      email: email,
      password: password,
    });

    if (result) return result;
    return null;
  }

  /**
   * 반드시 delta 값은 point + delta > 0 성립해야함
   * @param email
   * @param delta
   */
  async increasePoint(email: string, delta: number) {
    const calcedPoint = (await this.getPoint(email)) + delta;

    if (calcedPoint < 0) return false;

    await this.userModel.updateOne({ email }, { $set: { point: calcedPoint } });

    return true;
  }

  async getPoint(email: string) {
    const user = await this.get(email);

    return user?.point || 0;
  }

  async isExist(email: string) {
    if (!email) return false;

    if (await this.get(email as string)) return true;
    return false;
  }

  async get(email: string) {
    return await this.userModel.findOne({ email });
  }

  /**
   * 사용자 본인 비밀번호 변경
   * @param caller
   * @param oldPassword
   * @param newPassword
   */
  async changePassword(
    caller: IUser,
    oldPassword: string,
    newPassword: string
  ): Promise<boolean> {
    if (caller.password === oldPassword) {
      await this.userModel.updateOne(
        { email: caller.email },
        { $set: { password: newPassword } }
      );
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
  async setPassword(targetEmail: string, password: string): Promise<void> {
    await this.userModel.updateOne(
      { email: targetEmail },
      { $set: { password } }
    );
  }

  /**
   * 사용자 본인 닉네임 변경
   * @param caller
   * @param oldPassword
   * @param newPassword
   */
  async changeUsername(caller: IUser, username: string): Promise<void> {
    await this.userModel.updateOne(
      { email: caller.email },
      { $set: { username } }
    );
  }

  static getInstance(): UserService {
    return new UserService(User);
  }

  async information(): Promise<number> {
    return await this.userModel.find({}).count();
  }

  /**
   * 페이징
   * @param position 페이지 위치
   * @param interval 한 페이지당 사용자 수
   */
  async range(position: number, interval: number): Promise<IRangeResult> {
    return {
      values: await this.userModel
        .find()
        .skip((position - 1) * interval)
        .limit(interval),
      totalCount: await this.information(),
      currentPage: position,
      countPerPage: interval,
    };
  }

  /**
   * 게시글 검색
   * @param query
   * @returns
   */
  async search(option: UserSearchOption): Promise<IUser[]> {
    return await this.userModel.find(this.translateOptionToFilter(option));
  }

  translateOptionToFilter(option: UserSearchOption): FilterQuery<IUser> {
    const filter: FilterQuery<IUser> = {};

    if (option.isEmail) filter.email = { $regex: option.email, $options: "i" };

    if (option.isNickName)
      filter.username = { $regex: option.nickName, $options: "i" };

    if (option.isAdmin) filter.certificated = option.bvAdmin;

    if (option.isPeriod)
      filter.createdAt = { $gte: option.startedAt, $lte: option.endAt };

    return filter;
  }

  async delete(ids: string[]) {
    await this.userModel.deleteMany({
      email: { $in: ids },
    });
  }
}
