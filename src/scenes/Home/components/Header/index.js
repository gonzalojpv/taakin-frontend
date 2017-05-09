import React from "react";
import { Breadcrumb  } from 'react-bootstrap'
import './styles.css';

const Header = ({ toggleSidebar }) => {
  return(
    <header className="main-header">
      <a href="/dashboard" className="logo">
        <span className="logo-mini"><b>Taak</b>In</span>
        <span className="logo-lg"><b>Taak</b>In</span>
      </a>
      <nav className="navbar navbar-static-top">
        <a href="#"
          className="sidebar-toggle"
          data-toggle="offcanvas"
          role="button"
          onClick={ () => {
            toggleSidebar();
          }}>
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          <Breadcrumb>
            <Breadcrumb.Item active>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/">
              Salir
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </nav>
    </header>
  );
}

export default Header;
