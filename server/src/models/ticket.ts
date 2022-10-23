import { Schema, Model, Document, model } from "mongoose";

import { TicketClass, TicketState } from "@/types/dto";

import { autoIncrement } from 'mongoose-plugin-autoinc-fix';
export interface ITicket extends Document {
  identifier : number,
  owner : string,
  buyer: string,
  state : TicketState,
  price : number,
  tclass : TicketClass,
  expiredAt : Date,
  createdAt : Date,
}

export interface ITicketModel extends Model<ITicket> {
  findByKey: (key: number) => Promise<ITicket>;
  findByOwner: (owner: string) => Promise<ITicket[]>;
  getAll: () => Promise<ITicket[]>;
}

const TicketSchema : Schema<ITicket> = new Schema({
  identifier: {
    type: Number,
    unique: true,
  },
  owner: {
    type: String,
    required : true,
  },
  state: {
    type: String,
    required : true
  },
  price: {
    type: Number,
    required : true,
  },
  tclass : {
    type: String,
    require: true,
  },
  expiredAt: {
    type: Date,
    required: false,
  },
  createdAt :  {
    type: Date,
    required: true,
    default: Date.now
  }
})


TicketSchema.statics.findByKey = function(key: number) {
  return this.findOne({identifier: key});
}

TicketSchema.statics.findByOwner = function(owner: string) {
  return this.findOne({owner});
}

TicketSchema.statics.getAll = function() {
  return this.find({});
}

TicketSchema.plugin(autoIncrement, {
  model: 'tickets',
  field: 'identifier',
  startAt: 1,
  increment: 1
});

const Ticket = model<ITicket, ITicketModel>("ticket", TicketSchema);

export default Ticket;
