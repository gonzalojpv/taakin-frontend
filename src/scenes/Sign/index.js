import React from 'react';
import Header from "./components/Header";
import Login from "./scenes/Login";
import './styles.css';

export default class Sign extends React.Component {

  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="login-box">
        <Header/>
        <Login/>
      </div>
    );
  }
}
