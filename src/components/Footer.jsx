import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import React, { Component } from "react";

export default class Footer extends Component {
  state = {
    page: 0
  };

  showPage = (no) => {
    this.setState({ page: no });
  };

  render() {
    return (
      <footer id="footer">
        <Menubar showPage={this.showPage} />
      </footer>
    );
  }
}