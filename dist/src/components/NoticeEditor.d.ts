import { NoticeDTO } from "@/types/dto";
import React, { Component } from "react";
interface NoticeEditorProps {
    authenticated: boolean;
    state: any;
}
interface NoticeEditorState extends NoticeDTO {
    mode: 'update' | 'create';
}
export default class NoticeEditor extends Component<NoticeEditorProps, NoticeEditorState> {
    constructor(props: NoticeEditorProps);
    setTitle(text: string): void;
    setHeader(text: string): void;
    setContent(text: string): void;
    render(): React.ReactNode;
}
export {};
