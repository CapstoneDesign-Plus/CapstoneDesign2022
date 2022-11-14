import { Schema, Model, Document, model } from "mongoose";

import { autoIncrement } from "mongoose-plugin-autoinc-fix";
export interface INotice extends Document {
  identifier: number;
  title: string;
  writer: string;
  content: string;
  header: string;
  postedAt: Number;
  editedAt: Number;
  numOfView: number;
}

export interface INoticeModel extends Model<INotice> {
  findByKey: (key: number) => Promise<INotice>;
  findByWriter: (writer: string) => Promise<INotice[]>;
  findByTitle: (title: string) => Promise<INotice[]>;
  findByHeader: (header: string) => Promise<INotice[]>;
  findByDate: (date: Date) => Promise<INotice[]>;
  getAll: () => Promise<INotice[]>;
}

const NoticeSchema: Schema<INotice> = new Schema({
  identifier: {
    type: Number,
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
    type: Number,
    default: Date.now,
  },
  editedAt: {
    type: Number,
    default: Date.now,
  },
  numOfView: {
    type: Number,
    default: 0,
  },
});

NoticeSchema.statics.findByWriter = function (writer: string) {
  return this.find({
    writer: { $regex: writer },
  });
};

NoticeSchema.statics.findByTitle = function (title: string) {
  return this.find({
    title: { $regex: title },
  });
};

NoticeSchema.statics.findByHeader = function (header: string) {
  return this.find({
    header,
  });
};

/**
 * 추후 추가
 * @param date
 * @returns
 */
NoticeSchema.statics.findByDate = function (date: Date) {
  return this.find({});
};

NoticeSchema.statics.getAll = function () {
  return this.find({});
};

NoticeSchema.plugin(autoIncrement, {
  model: "notices",
  field: "identifier",
  startAt: 1,
  increment: 1,
});

const Notice = model<INotice, INoticeModel>("notice", NoticeSchema);

export default Notice;
