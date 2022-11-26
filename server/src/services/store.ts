import { TicketClass } from "@/types/dto";

export default class StoreService {
  private static instance: StoreService;

  private priceTable: { A: number; B: number; C: number };

  private constructor() {
    this.priceTable = {
      A: 4000,
      B: 4000,
      C: 3500,
    };
  }

  public getPrice(tclass: TicketClass) {
    return this.priceTable[tclass];
  }

  public setPrice(tclass: TicketClass, price: number) {
    if (price < 0) return;

    this.priceTable[tclass] = price;
  }

  public getTable() {
    return this.priceTable;
  }

  static getInstance() {
    if (!StoreService.instance) StoreService.instance = new StoreService();

    return StoreService.instance;
  }
}
