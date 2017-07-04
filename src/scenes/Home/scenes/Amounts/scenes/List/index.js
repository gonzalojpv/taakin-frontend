import React from "react";
import { connect } from 'react-redux';
import AmountsList from "./../../components/List";
import { fetchAmounts } from "./../../actions";

class List extends React.Component {

  componentDidMount() {
    this.props.fetchAmounts();
  }

  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <AmountsList amounts={this.props.amounts} />
        </div>
      </div>
    );
  }
}


// Make customer  array available in  props
function mapStateToProps(state) {
  return {
    amounts : state.Home.amountStore.amounts,
    errors: state.Home.amountStore.errors
  }
}

export default connect( mapStateToProps, { fetchAmounts } )(List);
