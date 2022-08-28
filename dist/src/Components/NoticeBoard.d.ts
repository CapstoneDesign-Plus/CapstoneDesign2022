/// <reference types="react" />
import IBoard from "./IBoard";
interface NoticeItemType {
    identifier: number;
    header: string;
    title: string;
    writer: string;
    numOfView: number;
    editedAt: Date;
    postedAt: Date;
}
export default class NoticeBoard extends IBoard<NoticeItemType> {
    constructor(props: any);
    renderHead(): JSX.Element;
    renderItem(item: NoticeItemType): JSX.Element;
    fetchBoardData(page: number, per: number): Promise<void>;
    onClickRefresh(): void;
}
export {};
