import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import './styles.css';

export default class Dashboard extends Component {

  constructor( props ) {
    super(props);
    this.state = {
      toggle:''
    }
  }

  toggleSidebar() {

    if ( '' !== this.state.toggle )
      this.setState({ toggle: '' });
    else
      this.setState({ toggle: 'sidebar-open' });
  }

  render() {
    return(
      <div className={ 'wrapper ' + this.state.toggle}>
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)}
          />
        <Sidebar/>
        <div className="content-wrapper">
          Content
        </div>
        <Footer/>
      </div>
    );
  }
}
