import React from "react";
import { Route } from 'react-router-dom';
import List from './scenes/List';
import Form from './components/Form';


class Amounts extends React.Component {

  render() {
    return(
      <section className="content">
        <Route path={`${this.props.match.url}/new`} component={Form}/>
        <Route exact path={this.props.match.url} component={List}/>
      </section>
    );
  }
}

export default Amounts;
