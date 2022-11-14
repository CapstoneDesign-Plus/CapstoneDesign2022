import { Schema, Model, Document, model } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  certificated: boolean;
  createdAt: number;
  uclass: number;
  point: number;
  tickets: string[];
}

export interface IUserModel extends Model<IUser> {
  findByEmail: (email: string) => Promise<IUser>;
  getAll: () => Promise<IUser[]>;
}

const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  certificated: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
  uclass: {
    type: Number,
    required: true,
    default: 9,
  },
  point: {
    type: Number,
    required: true,
    default: 0,
  },
  tickets: {
    type: [String],
    required: true,
    default: [],
  },
});

UserSchema.statics.findByEmail = function (email: string) {
  return this.findOne({ email });
};

UserSchema.statics.getAll = function () {
  return this.find({});
};

const User = model<IUser, IUserModel>("user", UserSchema);

export default User;
