import Token, { IToken, ITokenModel } from "@/models/token";
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
}
