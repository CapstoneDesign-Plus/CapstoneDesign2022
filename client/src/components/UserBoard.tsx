import { UserDTO } from "./dto";
import IBoard from "./IBoard";
import React from "react";
import { Link } from "react-router-dom";

export default class UserBoard extends IBoard<UserDTO> {
  constructor(props : any) {
    super(props);
  }


  renderHead() {
    return (
    <tr>
      <th>Name</th>
      <th>Point</th>
      <th>Class</th>
      <th>Email</th>
    </tr>)
  }

  renderItem(item: UserDTO): JSX.Element {
    return <tr key={item.email}>
      <td>{item.username}</td>
      <td>{item.point}</td>
      <td>{item.uclass}</td>
      <td><Link to={ `/user/${item.email}` }>{item.email}</Link></td>
    </tr>
  }
  
  async fetchBoardData(page: number, per: number) {
    const res = await fetch(`/api/v1/user/get/list?page=${page}&per=${per}`);

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