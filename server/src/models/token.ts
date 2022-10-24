import { Schema, Model, Document, model } from "mongoose";

import { autoIncrement } from 'mongoose-plugin-autoinc-fix';

export interface IToken extends Document {
  identifier : number,
  expiredAt : Date,
  createdAt : Date,
  email: string
}

export interface ITokenModel extends Model<IToken> {

}

const TokenSchema : Schema<IToken> = new Schema({
  identifier: {
    type: Number,
    unique: true,
  },
  createdAt :  {
    type: Date,
    required: true,
  },
  expiredAt: {
    type: Date,
    required : true,
  },
  email: {
    type: String,
    required: true
  }
})

TokenSchema.plugin(autoIncrement, {
  model: 'tokens',
  field: 'identifier',
  startAt: 1,
  increment: 1
});

const Token = model<IToken, ITokenModel>("token", TokenSchema);

export default Token;
