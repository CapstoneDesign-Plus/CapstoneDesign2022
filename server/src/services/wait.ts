import env from "@/config";
import { TicketClass } from "@/types/dto";
import fs from "fs";
import path from "path";
import DietService, { DietDay } from "./diet";

type WaitStorage = {
  [id: string]: {
    course: TicketClass;
    appendAt: number;
  };
};

type CourseCount = {
  [courseName in TicketClass]: {
    peopleCount: number;
    waitSecond: number;
  };
};

interface WaitTimeTableRecord {
  keyword: string;
  supply: number;
  ready: number;
  unit: number;
}

const RES_PATH: string = path.join(
  env.ROOT_PATH,
  "/resource/waittime_table.json"
);

export default class WaitService {
  private static instance: WaitService;

  private WAIT_TIME_TABLE: WaitTimeTableRecord[];
  private storage: WaitStorage;

  private constructor() {
    this.WAIT_TIME_TABLE = JSON.parse(
      fs.readFileSync(RES_PATH, { encoding: "utf-8" })
    ) as WaitTimeTableRecord[];
    this.storage = {};
  }

  append(id: string, course: TicketClass) {
    this.storage[id] = {
      course,
      appendAt: Date.now(),
    };
  }

  delete(id: string) {
    delete this.storage[id];
  }

  async getCourseCount() {
    const count: CourseCount = {
      A: {
        peopleCount: 0,
        waitSecond: 0,
      },
      B: {
        peopleCount: 0,
        waitSecond: 0,
      },
      C: {
        peopleCount: 0,
        waitSecond: 0,
      },
    };

    for (const key in count) {
      const course = key as TicketClass;
      const peopleCount = Object.values(this.storage).filter(
        (v) => key === v.course
      ).length;

      count[course] = {
        peopleCount,
        waitSecond: await this.CalcWaitSecond(course, peopleCount),
      };
    }

    return count;
  }

  async CalcWaitSecond(
    course: TicketClass,
    peopleCount: number
  ): Promise<number> {
    let dayOfWeek: string = [
      "fri",  // 일요일
      "mon",
      "tue",
      "wed",
      "thr",
      "fri",
      "fri",  // 토요일
    ][new Date().getDay()]; // 가져올 날짜의 요일

    let diet: string[] = (await DietService.getInstance().getDiet())[dayOfWeek][
      course.toLowerCase()
    ];

    let waitSecond: number = 0;
    this.WAIT_TIME_TABLE.forEach((record) => {
      if (record.keyword !== "기타") {
        diet.forEach((menu) => {
          if (menu.includes(record.keyword)) {
            waitSecond += WaitService.calcWaitSecondOneMenu(
              record,
              peopleCount
            );
          }
        });
      }
    });

    if (waitSecond == 0) {
      let record: WaitTimeTableRecord = this.WAIT_TIME_TABLE[0]; // 기타
      waitSecond = WaitService.calcWaitSecondOneMenu(record, peopleCount);
    }
    return waitSecond;
  }

  static calcWaitSecondOneMenu(
    record: WaitTimeTableRecord,
    peopleCount: number
  ): number {
    return (
      record.supply * peopleCount +
      record.ready * Math.ceil(peopleCount / record.unit)
    );
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new WaitService();
    }
    return this.instance;
  }
}
