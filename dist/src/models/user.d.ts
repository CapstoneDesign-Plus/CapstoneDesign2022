import { Model, Document } from "mongoose";
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    certificated: boolean;
    createdAt: Date;
    uclass: number;
    point: number;
    tickets: string[];
}
export interface IUserModel extends Model<IUser> {
    findByEmail: (email: string) => Promise<IUser>;
    getAll: () => Promise<IUser[]>;
}
declare const User: IUserModel;
export default User;
