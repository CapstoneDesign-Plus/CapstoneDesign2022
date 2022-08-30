import { NoticeDTO } from "@/types/dto";
import React, { Component } from "react";

interface NoticeEditorProps {
  authenticated: boolean,
  state: any
}

interface NoticeEditorState extends NoticeDTO {
  mode: 'update' | 'create',
}

interface Info {
  noticeId: string
}

export default class NoticeEditor extends Component<NoticeEditorProps, NoticeEditorState> {

  constructor(props: NoticeEditorProps) {
    super(props);

    console.log(props.state);

    if(!props.state){
      this.state = {
        mode: 'create',
        title: '',
        content: '',
        header: ''
      }
    }else{
      const info = props.state as Info;

      this.state = {
        mode: 'update',
        title: '',
        content: '',
        header: ''
      }
    }
  }

  setTitle(text: string) {
    this.setState({
      title:text
    });
  }

  setHeader(text: string) {
    this.setState({
      header: text
    })
  }

  setContent(text: string) {
    this.setState({
      content: text
    })
  }

  render(): React.ReactNode {
    return <div>
      <p>Header - <input type="text" onChange={({target: {value}})=> {this.setHeader(value)}} /></p>
      <p>Title - <input type="text" onChange={({target: {value}})=> {this.setTitle(value)}} /></p>
      <div>
        <textarea cols={ 30 } rows={ 10 } onChange={({target: {value}})=>{this.setContent(value)}}>
        </textarea>
      </div>
      
    </div>
  }
}