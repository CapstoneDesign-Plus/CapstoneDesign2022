
import React from "react";
import { Link } from "react-router-dom";
import IBoard from "./IBoard";

interface NoticeItemType {
  identifier: number,
  header : string,
  title: string,
  writer: string,
  numOfView: number,
  editedAt: Date,
  postedAt: Date
}

export default class NoticeBoard extends IBoard<NoticeItemType> {
  constructor(props : any) {
    super(props);
  }


  renderHead() {
    return (
    <tr>
      <th>Notice Id</th>
      <th>Notice Header</th>
      <th>Notice Title</th>
      <th>Notice Writer</th>
      <th>Notice View</th>
    </tr>)
  }

  renderItem(item: NoticeItemType): JSX.Element {
    return <tr key={item.identifier}>
      <td>{item.identifier}</td>
      <td>{item.header}</td>
      <td><Link to={ `/notice/${item.identifier}` }>{item.title}</Link></td>
      <td>{item.writer}</td>
      <td>{item.numOfView}</td>
    </tr>
  }
  
  async fetchBoardData(page: number, per: number) {
    const res = await fetch(`/api/v1/notice/get/list?page=${page}&per=${per}`);

    if(res.status != 200) throw Error('error!');

    const data = await res.json();

    this.setState({
      currentPage : data.currentPage,
      currentPerPage : data.countPerPage,
      totalLength: data.totalCount,
      items: data.values
    });
  }

  onClickRefresh(): void {
    this.fetchBoardData(
      this.state.currentPage,
      this.state.currentPerPage
    );
  }
}