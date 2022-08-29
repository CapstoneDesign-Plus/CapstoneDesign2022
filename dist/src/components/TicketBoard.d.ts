/// <reference types="react" />
import { TicketDTO } from "@/types/dto";
import IBoard from "./IBoard";
export default class TicketBoard extends IBoard<TicketDTO> {
    constructor(props: any);
    renderHead(): JSX.Element;
    renderItem(item: TicketDTO): JSX.Element;
    fetchBoardData(page: number, per: number): Promise<void>;
}
