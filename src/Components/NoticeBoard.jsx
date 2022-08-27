
import IBoard from "./IBoard";

export default class NoticeBoard extends IBoard {

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

  renderItem(item) {
    return <tr key={item.identifier}>
      <td>{item.identifier}</td>
      <td>{item.header}</td>
      <td>{item.title}</td>
      <td>{item.writer}</td>
      <td>{item.numOfView}</td>
    </tr>
  }
  
  async fetchBoardData() {
    const res = await fetch(`/api/v1/notice/get/list?page=${this.state.currentPage}&per=${this.state.currentPerPage}`);

    if(res.status != 200) throw Error('error!');

    const data = await res.json();

    this.setState({
      currentPage : data.currentPage,
      currentPerPage : data.countPerPage,
      totalLength: data.totalCount,
      items: data.values
    });
  }

  onClickRefresh() {

  }
}