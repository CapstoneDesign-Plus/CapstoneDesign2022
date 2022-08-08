
import { Schema, Model, Document, model } from "mongoose";

import { NoticeDTO } from "@/types/dto";

export interface INotice extends Document {
  identifier: number,
  title: string,
  writer: string,
  content: string,
  header: string,
  postedAt: Date,
  revisedAt: Date,
}

export interface NoticeModel {
  create(notice : NoticeDTO) : Promise<INotice>,
  findOne(notice : NoticeDTO) : Promise<INotice>,
}

interface INoticeModel extends Model<INotice> {
  findByWriter: (writer: string) => Promise<INotice[]>;
  findByTitle: (title: string) => Promise<INotice[]>;
  findByHeader: (header: string) => Promise<INotice[]>;
  findByDate: (date : Date) => Promise<INotice[]>;
  getAll: () => Promise<INotice[]>;
}

const NoticeSchema : Schema<INotice> = new Schema({
  identifier: {
    type: Number,
    required : true,
    unique: true,
  },
  title: {
    type: String,
    require: true,
  },
  writer: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  header: {
    type: String,
    require: false,
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  revisedAt: {
    type: Date,
    default: Date.now
  }
})

NoticeSchema.statics.findByWriter = function(writer: string) {
  return this.find({
    writer: {$regex: writer}
  });
}

NoticeSchema.statics.findByTitle = function(title: string) {
  return this.find({
    title: {$regex: title}
  });
}

NoticeSchema.statics.findByHeader = function(header: string) {
  return this.find({
    header,
  });
}

/**
 * 추후 추가
 * @param date 
 * @returns 
 */
NoticeSchema.statics.findByDate = function(date : Date) {
  return this.find({})
}

NoticeSchema.statics.getAll = function() {
  return this.find({});
}

const Notice = model<INotice, INoticeModel>("notice", NoticeSchema);

export default Notice