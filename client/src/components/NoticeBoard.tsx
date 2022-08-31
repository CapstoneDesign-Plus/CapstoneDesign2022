
import React from "react";
import { Link } from "react-router-dom";
import { NoticeDTO } from "./dto";
import IBoard from "./IBoard";

export default class NoticeBoard extends IBoard<NoticeDTO> {
  constructor(props : any) {
    super(props);
  }


  renderHead() {
    return (
    <tr>
      <th>Id</th>
      <th>Header</th>
      <th>Title</th>
      <th>Writer</th>
      <th>View</th>
      <th>Edit</th>
    </tr>)
  }

  renderItem(item: NoticeDTO): JSX.Element {
    return <tr key={item.identifier}>
      <td>{item.identifier}</td>
      <td>{item.header}</td>
      <td><Link to={ `/notice/${item.identifier}` }>{item.title}</Link></td>
      <td>{item.writer}</td>
      <td>{item.numOfView}</td>
      <td><Link to={ `/notice/edit/${item.identifier}`}>Edit</Link></td>
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
}