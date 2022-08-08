
import { UserModel } from '@/models/user'
import { UserDTO } from '@/types/dto';

export default class UserService {
  private userModel : UserModel;

  constructor(userModel : any) {
    this.userModel = userModel
  }

  async Signup(user : UserDTO) {
    const result = await this.userModel.create(user);

    console.log(result);

    if(result) return true;
    return false;
  }

  async Login(user : UserDTO) {
    console.log(user)

    const result = await this.userModel.findOne({email: user.email, password: user.password});

    console.log(result);

    if(result) return result;
    return null;
  }

  async IsUser(email: string | null) {
    if(!email) return null;

    const result = await this.userModel.findOne({email});

    return result;
  }
}