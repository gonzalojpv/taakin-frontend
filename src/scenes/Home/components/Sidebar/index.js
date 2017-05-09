import React from "react";
import './styles.css';
import userPhoto from "../../../../images/bahlum.png";

const Sidebar = () => {
  return(
    <aside className="main-sidebar">
      <section className="sidebar">

        <div className="user-panel">
          <div className="pull-left image">
            <img src={userPhoto} className="img-circle" alt="User"/>
          </div>
          <div className="pull-left info">
            <p>Bahlum Yuum</p>
            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <ul className="sidebar-menu">
          <li className="header">MAIN NAVIGATION</li>
          <li className="active treeview">
            <a href="#">
              <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
              <li className="active"><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
            </ul>
          </li>
          <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
            <li className="header">LABELS</li>
          <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
          <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
          <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
