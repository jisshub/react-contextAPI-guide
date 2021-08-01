import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

class Navbar extends Component {
  render() { 
    return ( 
      <nav>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
     );
  }
}
 
export default Navbar;

Navbar.propTypes = {};

Navbar.defaultProps = {};

