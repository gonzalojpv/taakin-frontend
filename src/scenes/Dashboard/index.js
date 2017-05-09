import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import './styles.css';

export default class Dashboard extends Component {

  render() {
    return(
      <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">
          Content
        </div>
        <Footer/>
      </div>
    );
  }
}
