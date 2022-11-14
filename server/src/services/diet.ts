import request from "request";
import { Cheerio, load } from "cheerio";

const REQ_OPTION: request.RequiredUriUrl = {
  uri: "https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=3&Ltype3=3&Tname=S_Food&Ldir=board/S_Food&Lpage=s_food_view&d1n=5&d2n=4&d3n=4&d4n=0"
};

const TYPE_NAMES = ["a", "b", "c", "porridge", "salad", "cupFruit", "additional"];
const DAY_NAMES = ["mon", "tue", "wed", "thr", "fri"];

export interface DietDay {
  a: string[],
  b: string[],
  c: string[],
  porridge: string[],
  salad: string[],
  cupFruit: string[],
  additional: string[],
  [key: string]: string[]
}

export interface DietTable {
  mon: DietDay,
  tue: DietDay,
  wed: DietDay,
  thr: DietDay,
  fri: DietDay,
  [key: string]: DietDay;
}

export default class DietService {
  private static instance: DietService;
  private dietTable: DietTable;

  private constructor() {
    this.dietTable = {} as DietTable;
  }

  static getInstance(): DietService {
    if (DietService.instance === undefined)
      DietService.instance = new DietService();
    return DietService.instance;
  }

  getDiet(): DietTable {
    this.crawl();
    return this.dietTable;
  }

  private loadFromFile() {

  }

  private crawl() {
    request.get(REQ_OPTION, (error, res, body) => {
      if (error) return;

      let $ = load(body);
      $('#table1 tbody tr').map((i, element) => {
        if (i >= TYPE_NAMES.length) return;

        DAY_NAMES.forEach((day, j) => {
          this.dietTable[day][TYPE_NAMES[i]] =
            ($(element).find(`td:nth-last-of-type(${DAY_NAMES.length - j})`).html() || '')
            .replace('&nbsp;', '')
            .replace('&lt;', '<')
            .replace('&gt;', '>')
            .split('<br>');
        });
      });
    })
  }
}