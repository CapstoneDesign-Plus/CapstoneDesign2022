/// <reference types="react" />
import { NoticeDTO } from "@/types/dto";
import IBoard from "./IBoard";
export default class NoticeBoard extends IBoard<NoticeDTO> {
    constructor(props: any);
    renderHead(): JSX.Element;
    renderItem(item: NoticeDTO): JSX.Element;
    fetchBoardData(page: number, per: number): Promise<void>;
}
