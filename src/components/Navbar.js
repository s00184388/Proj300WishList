import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "react-sidebar";
import "./SideBar.css";

{
  /*toggle button class*/
}
export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export class ToggleButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.onSetSidebarOpen(true)}
        className="btn btn-lg m-r-1 react-toggle"
        title="Toggle sidebar"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    );
  }
}

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-default navbar-fixed-top bg-primary white">
          <div className="pull-left">
            <div className="navbar-brand m-a-0 p-a-0">
              <img src={require("./imgs/logo.png")} height="22" alt="" />
            </div>
            <ToggleButton />
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
