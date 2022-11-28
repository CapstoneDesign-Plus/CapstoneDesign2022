import Log, {
  ILog,
  ILogModel,
  LogServiceType,
  LogVerbosity,
} from "@/models/log";
import { IRangeResult, LogSearchOption } from "@/types/dto";
import { FilterQuery } from "mongoose";

export default class LogService {
  private logModel: ILogModel;

  constructor(logModel: ILogModel) {
    this.logModel = logModel;
  }

  static getInstance(): LogService {
    return new LogService(Log);
  }

  /**
   * get the log from its id.
   * @param id log's id
   * @returns ILog object, if no log found, return null.
   */
  async get(id: number): Promise<ILog | null> {
    return await this.logModel.findByKey(id);
  }

  /**
   * log to database.
   * @param source where log request came from
   * @param content log content
   * @param verbosity importance of log, default is "info"
   * @param serviceType type of service, default is "unknown"
   */
  async log(
    path: string,
    content: string,
    verbosity: LogVerbosity = "info",
    serviceType: LogServiceType = "unknown",
    caller: string
  ) {
    await this.logModel.create({
      verbosity,
      path,
      content,
      serviceType,
      caller
    });
  }

  /**
   * get the number of log stored in database.
   * @returns number of log
   */
  async information(): Promise<number> {
    return await this.logModel.find({}).count();
  }

  /**
   * 페이징
   * @param position 페이지 위치
   * @param interval 한 페이지당 로그 수
   */
  async range(position: number, interval: number): Promise<IRangeResult> {
    return {
      values: await this.logModel
        .find()
        .skip((position - 1) * interval)
        .limit(interval),
      totalCount: await this.information(),
      currentPage: position,
      countPerPage: interval,
    };
  }

  /**
   * 게시글 검색
   * @param query
   * @returns
   */
  async search(option: LogSearchOption): Promise<ILog[]> {
    return await this.logModel.find(this.translateOptionToFilter(option));
  }

  translateOptionToFilter(option: LogSearchOption): FilterQuery<ILog> {
    const filter: FilterQuery<ILog> = {};

    if (option.isContent)
      filter.content = { $regex: option.content, $options: "i" };

    if (option.isPath)
      filter.isPath = { $regex: option.path, $options: "i" };

    if (option.isPeriod)
      filter.timestamp = { $gte: option.startedAt, $lte: option.endAt };

    return filter;
  }
}
