import { TicketDTO } from "@/types/dto";
import IBoard from "./IBoard";
import React from "react";
import { Link } from "react-router-dom";

export default class TicketBoard extends IBoard<TicketDTO> {
  constructor(props : any) {
    super(props);
  }


  renderHead() {
    return (<tr>
      <th>Price</th>
      <th>Owner</th>
      <th>Id</th>
      <th>State</th>
      <th>Class</th>
    </tr>)
  }

  renderItem(item: TicketDTO): JSX.Element {
    return <tr key={item.identifier}>
      <td>{item.price}</td>
      <td>{item.owner}</td>
      <td><Link to='/ticket/content'
        state={{id: item.identifier}}>{item.identifier}</Link></td>
      <td>{item.state}</td>
      <td>{item.tclass}</td>
    </tr>
  }
  
  async fetchBoardData(page: number, per: number) {
    const res = await fetch(`/api/v1/ticket/get/list?page=${page}&per=${per}`);

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