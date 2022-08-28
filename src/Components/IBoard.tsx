
import React, { Component, Fragment } from "react";

interface IBoardState<ItemType> {
  currentPage: number,
  currentPerPage: number,
  totalLength: number,
  cursorScope: number,
  items: ItemType[],
}

export default class IBoard<ItemType> extends Component<{}, IBoardState<ItemType>> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      currentPage: 1,
      currentPerPage: 15,
      totalLength: 0,
      cursorScope: 2,
      items: [],
    };
  }

  async componentDidMount() {
    await this.fetchBoardData(1, 10);
  }

  /**
   * Calculator page limit using state information.
   */
  getPageCursorLimit() {
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

  renderItem(item : ItemType) {
    return (
      <tr>
        <td></td>
      </tr>
    )
  }

  renderPageCursors() {    

    const [minCursor, maxCursor] = [
      Math.max(1, this.state.currentPage - this.state.cursorScope),
      Math.min(
        this.getPageCursorLimit(),
        this.state.currentPage + this.state.cursorScope,
      )
    ];

    const cursors = Array.from({length: maxCursor - minCursor + 1}, (_, i) => i + minCursor);

    return <>
      {cursors.map(v=>{
        return <div key={v} data-cursor={v}>
          {v}
        </div>
      })}
    </>
  }

  /**
   * Must override in subclass.
   */
  async fetchBoardData(page: number, per: number) {
    console.log('fetch');
  }
  
  onClickRefresh() {
    console.log('hello');
  }

  onClickPageCursor(e : React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = e.target as HTMLElement;

    if(el.dataset['cursor']){      
      this.fetchBoardData(
        parseInt(el.dataset['cursor']),
        10
      );
    }
  }

  render() {
    return (
      <Fragment>        
        <div>
          <button onClick={()=> this.onClickRefresh()}>Refresh</button>
        </div>
        <table>
          <thead>
            { this.renderHead() }
          </thead>
          <tbody>
            { this.state.items.map((item: any)=>this.renderItem(item)) }
          </tbody>
        </table>
        <div className="page-cursor-con" onClick={(e)=> this.onClickPageCursor(e)}>
          { this.renderPageCursors() }
        </div>
      </Fragment>
    )
  }
}