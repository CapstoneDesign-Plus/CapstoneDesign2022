import Token, { IToken, ITokenModel } from "@/models/token";
import { IRangeResult, TokenSearchOption } from "@/types/dto";
import { FilterQuery } from "mongoose";
import tcrypto from "./tcrypto";

export default class TokenService {
  private tokenModel: ITokenModel;

  constructor(tokenModel: any) {
    this.tokenModel = tokenModel;
  }

  async create(email: string, waitingMinute: number): Promise<string | null> {
    const now = Date.now();

    const res = await this.tokenModel.create({
      email,
      createdAt: now,
      expiredAt: now + waitingMinute * 60000,
    });

    return res ? tcrypto.cipher(res.identifier) : null;
  }

  async get(tokenIdentifier: string) {
    try {
      const identifier = Number(tcrypto.decipher(tokenIdentifier));
      return await this.tokenModel.findOne({ identifier });
    } catch (e) {
      return null;
    }
  }

  static isValid(token: IToken) {
    const current = Date.now();

    return (
      token.createdAt.valueOf() <= current &&
      current <= token.expiredAt.valueOf()
    );
  }

  static getInstance(): TokenService {
    return new TokenService(Token);
  }

  async delete(ids: number[]) {
    await this.tokenModel.deleteMany({
      identifier: { $in: ids },
    });
  }

  async information(): Promise<number> {
    return await this.tokenModel.find({}).count();
  }

  /**
   * 페이징
   * @param position 페이지 위치
   * @param interval 한 페이지당 사용자 수
   */
  async range(position: number, interval: number): Promise<IRangeResult> {
    return {
      values: await this.tokenModel
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
  async search(option: TokenSearchOption): Promise<IToken[]> {
    return await this.tokenModel.find(this.translateOptionToFilter(option));
  }

  translateOptionToFilter(option: TokenSearchOption): FilterQuery<IToken> {
    const filter: FilterQuery<IToken> = {};

    if (option.isCaller)
      filter.email = { $regex: option.caller, $options: "i" };

    if (option.isCreatedPeriod)
      filter.createdAt = {
        $gte: option.createdStartedAt,
        $lte: option.createdEndAt,
      };

    if (option.isExpiredPeriod)
      filter.expiredAt = {
        $gte: option.expiredStartedAt,
        $lte: option.expiredEndAt,
      };

    return filter;
  }
}
