import React from "react";
import TreeviewMenu, { MenuItem } from './../TreeviewMenu';
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
          <li className="header">MENU PRINCIPAL</li>
            <MenuItem
              slug='dashboard'
              href='/dashboard'
              label='Dashboard'
              cls='fa-dashboard'
            />
          <TreeviewMenu
            title='Clientes'
            cls='fa-users'
            items={
              [
                { label:'Nuevo', slug:'add-customer', href:'/customers/new', cls:'fa-user-plus' },
                { label:'Lista', slug:'customers', href:'/customers', cls:'fa-th-list' }
              ]
            }
          />
          <TreeviewMenu
            title='Montos'
            cls='fa-usd'
            items={
              [
                { label:'Nuevo', slug:'add-amount', href:'/amounts/new', cls:'fa-plus-square' },
                { label:'Lista', slug:'list-amount', href:'/amounts', cls:'fa-th-list' }
              ]
            }
          />
          <MenuItem
            slug='demo-1'
            href=''
            label='DEmo1'
            cls='fa-user'
          />
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
