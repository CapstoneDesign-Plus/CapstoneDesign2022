
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {


  render() {
    return (
      <div className="main">
        <ul>
          <Link to='/noticeBoard'><li>Go Notice Board</li></Link>
        </ul>
      </div>
    )
  }
}