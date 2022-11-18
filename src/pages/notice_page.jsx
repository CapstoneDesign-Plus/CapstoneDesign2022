import React, { Component } from "react";

import Notice from "../components/Notice";
import Template from "../components/templates/ui_consistis";

class NoticePage extends Component {
  render() {
    return (
      <Template>
        <Notice />
      </Template>
    );
  }
}

export default NoticePage;
