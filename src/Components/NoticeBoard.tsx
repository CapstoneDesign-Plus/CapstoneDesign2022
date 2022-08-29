
import React from "react";
import { Link } from "react-router-dom";
import { NoticeDTO } from "@/types/dto";
import IBoard from "./IBoard";

export default class NoticeBoard extends IBoard<NoticeDTO> {
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

  renderItem(item: NoticeDTO): JSX.Element {
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
}