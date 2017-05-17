import React, { Component } from "react";
import {
  Route,
  Switch
} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./scenes/Dashboard";
import Customers from "./scenes/Customers";
import './styles.css';

export default class Home extends Component {

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
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/customers" component={Customers}/>
            <Route render={()=> {
              return <p>Not Found</p>
            }}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}
