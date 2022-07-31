import { Schema, Model, Document, model } from "mongoose";
import { IUser } from '@/types';

interface IUserDoc extends IUser, Document {

}
interface IUserModel extends Model<IUserDoc> {
  findByEmail: (email: string) => Promise<IUserDoc>;
  getAll: () => Promise<IUserDoc[]>;
}

const UserSchema : Schema<IUserDoc> = new Schema({
  username: {
    type: String,
    required : true
  },
  email: {
    type: String,
    required : true,
    unique: true
  },
  password: {
    type: String,
    required : true
  },
  certificated: {
    type: Boolean,
    required : true,
    default: false,
  },
  createdAt : {
    type: Date,
    default: Date.now
  },
  uclass: {
    type: Number,
    required: true,
    default: 9
  },
  point :  {
    type: Number,
    required: true,
    default: 0
  }
})

UserSchema.statics.findByEmail = function(email: string) {
  return this.findOne({email});
}

UserSchema.statics.getAll = function() {
  return this.find({});
}

const User = model<IUserDoc, IUserModel>("user", UserSchema);

export default User