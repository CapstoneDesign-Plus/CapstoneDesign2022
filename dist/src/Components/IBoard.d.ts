import React, { Component } from "react";
interface IBoardState<ItemType> {
    currentPage: number;
    currentPerPage: number;
    totalLength: number;
    cursorScope: number;
    items: ItemType[];
}
export default class IBoard<ItemType> extends Component<{}, IBoardState<ItemType>> {
    constructor(props: any);
    componentDidMount(): Promise<void>;
    /**
     * Calculator page limit using state information.
     */
    getPageCursorLimit(): number;
    /**
     * Must override in subclass.
     * return table head
     */
    renderHead(): JSX.Element;
    renderItem(item: ItemType): JSX.Element;
    renderPageCursors(): JSX.Element;
    /**
     * Must override in subclass.
     */
    fetchBoardData(page: number, per: number): Promise<void>;
    onClickRefresh(): void;
    onClickPageCursor(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
    render(): JSX.Element;
}
export {};
