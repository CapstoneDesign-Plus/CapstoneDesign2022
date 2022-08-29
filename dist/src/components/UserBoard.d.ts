/// <reference types="react" />
import { UserDTO } from "@/types/dto";
import IBoard from "./IBoard";
export default class UserBoard extends IBoard<UserDTO> {
    constructor(props: any);
    renderHead(): JSX.Element;
    renderItem(item: UserDTO): JSX.Element;
    fetchBoardData(page: number, per: number): Promise<void>;
}
