import { TicketClass } from "@/types/dto";

type WaitStorage = {
  [id: string]: {
    course: TicketClass;
    appendAt: number;
  };
};

type CourseCount = {
  [courseName in TicketClass]: {
    peopleCount: number;
    waitMinute: number;
  };
};

export default class WaitService {
  private static instance: WaitService;

  private storage: WaitStorage;

  private constructor() {
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

  getCourseCount() {
    const count: CourseCount = {
      A: {
        peopleCount: 0,
        waitMinute: 0,
      },
      B: {
        peopleCount: 0,
        waitMinute: 0,
      },
      C: {
        peopleCount: 0,
        waitMinute: 0,
      },
    };

    for (const key in count) {
      const peopleCount = Object.values(this.storage).filter(
        (v) => key === v.course
      ).length;

      count[key as TicketClass] = {
        peopleCount,
        waitMinute: WaitService.CalcWaitMinute(peopleCount),
      };
    }

    return count;
  }

  static CalcWaitMinute(peopleCount: number) {
    return 0;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new WaitService();
    }
    return this.instance;
  }
}
