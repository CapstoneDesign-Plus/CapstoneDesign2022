import { model, Model, Schema } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc-fix";

export type LogVerbosity = "info" | "warning" | "error";
export type LogServiceType = "ticket" | "notice" | "user" | "unknown";

export interface ILog extends Document {
  identifier : number,
  timestamp : Date,
  verbosity : LogVerbosity,
  source: string,
  content: string,
  serviceType?: LogServiceType,
}

export interface ILogModel extends Model<ILog> {
  findByKey: (key: number) => Promise<ILog>;
}

const LogSchema : Schema<ILog> = new Schema({
  identifier: {
    type: Number,
    unique: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  verbosity: {
    type: String,
    required : true,
  },
  source: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: false,
    default: "unknown"
  }
})

LogSchema.statics.findByKey = function(key: number) {
  return this.findOne({identifier: key});
}

LogSchema.plugin(autoIncrement,  {
  model: 'logs',
  field: 'identifier',
  startAt: 1,
  increment: 1
});

const Log = model<ILog, ILogModel>("log", LogSchema);

export default Log;