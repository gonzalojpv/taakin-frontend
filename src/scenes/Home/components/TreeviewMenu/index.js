import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.css';

export const MenuItem = ( props ) => {
  return(
    <li>
      <NavLink
        to={props.href}
        activeClassName='active'
      >
        <i className={ 'fa ' + props.cls }></i>{ props.label }
      </NavLink>
    </li>
  );
}

MenuItem.propTypes = {
  slug : PropTypes.string.isRequired,
  href : PropTypes.string,
  label: PropTypes.string.isRequired,
  cls  : PropTypes.string
}


class TreeviewMenu extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      selected:'',
      toggle:''
    }
  }

  toggle() {

    if ( '' !== this.state.toggle )
      this.setState({ toggle: '' });
    else
      this.setState({ toggle: this.props.toggle });

    if ( '' !== this.state.selected )
      this.setState({ selected: '' });
    else
      this.setState({ selected: this.props.selected });
  }

  render() {
    const items = this.props.items.map( (item) => {
      return(
        <MenuItem
        key={item.slug}
        {...item}
        />
      );
    });

    return(
      <li className={ 'treeview ' + this.state.selected }>
        <a href="#" onClick={ this.toggle.bind(this) }>
          <i className={ 'fa ' + this.props.cls } aria-hidden="true"></i> <span>{ this.props.title }</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul className={ "treeview-menu " + this.state.toggle }>
          {items}
        </ul>
      </li>
    );
  }
}

TreeviewMenu.propTypes = {
  title   : PropTypes.string.isRequired,
  items   : PropTypes.array,
  toggle  : PropTypes.string,
  cls     : PropTypes.string,
  selected: PropTypes.string
}

TreeviewMenu.defaultProps = {
  items   : [],
  cls     : 'fa-circle-o',
  toggle  : 'menu-open',
  selected: 'active'
}

export default TreeviewMenu ;
