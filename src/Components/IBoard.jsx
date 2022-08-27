
import React, { Component, Fragment } from "react";

export default class IBoard extends Component {
  
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      currentPerPage: 15,
      totalLength: 0,
      items: [],
    };
  }

  async componentDidMount() {
    await this.fetchBoardData();
  }

  /**
   * Calculator page limit using state information.
   */
  getPageLimit() {
    return Math.ceil(this.state.totalLength / this.state.currentPerPage);
  }

  /**
   * Must override in subclass.
   * return table head
   */
  renderHead() {
    return (
      <tr>
        <th>Board Template</th>
      </tr>
    )
  }

  /**
   * Must override in subclass.
   * @param {object} item
   */
  renderItem(item) {
    return (
      <tr>
        <td>{item}</td>
      </tr>
    )
  }

  /**
   * Must override in subclass.
   */
  async fetchBoardData() {
    console.log('fetch');
  }

  onClickRefresh() {
    console.log('hello');
  }

  render() {
    return (
      <Fragment>
        <h2>{this.state.boardName}</h2>
        <div>
          <button onClick={()=> this.onClickRefresh()}>Refresh</button>
        </div>
        <table>
          <thead>
            { this.renderHead() }
          </thead>
          <tbody>
            { this.state.items.map(item=>this.renderItem(item)) }
          </tbody>
        </table>
        <div>
          
        </div>
      </Fragment>
    )
  }
}