
import UserModel from '@/models/user'
import { UserDTO } from '@/types'

export default {
  async Signup(user : UserDTO) {
    const result = await UserModel.create(user);

    if(result) return true;
    return false;
  }
}