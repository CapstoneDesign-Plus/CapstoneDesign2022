import { Model, Document } from "mongoose";
export interface INotice extends Document {
    identifier: number;
    title: string;
    writer: string;
    content: string;
    header: string;
    postedAt: Date;
    editedAt: Date;
    numOfView: number;
}
export interface INoticeModel extends Model<INotice> {
    findByKey: (key: number) => Promise<INotice>;
    findByWriter: (writer: string) => Promise<INotice[]>;
    findByTitle: (title: string) => Promise<INotice[]>;
    findByHeader: (header: string) => Promise<INotice[]>;
    findByDate: (date: Date) => Promise<INotice[]>;
    getAll: () => Promise<INotice[]>;
}
declare const Notice: INoticeModel;
export default Notice;
