import { UsedTicketSearchRange } from "@/types/dto";

const DAY_IN_MS = 86400 * 1000;

export default {
  getPastDate: (offset: UsedTicketSearchRange) => {
    let past: Date = new Date();
    past.setHours(0, 0, 0, 0);
    switch (offset) {
      case "7d":
        past.setDate(past.getDate() - 7);
        break;
      case "30d":
        past.setDate(past.getDate() - 30);
        break;
      case "3m":
        past.setMonth(past.getMonth() - 3);
        break;
      case "1y":
        past.setFullYear(past.getFullYear() - 1);
        break;
      default:
        break;
    }
    return past;
  }
}