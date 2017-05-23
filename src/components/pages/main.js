import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router';

import closeMenu from '../../actions/close-menu';

import { TEXT_PRIMARY } from '../../colors';

class Main extends Component {
  componentWillMount() {
    this.props.dispatch(closeMenu());
  }

  render() {
    return (
      <RouterLink style={ style } to="/home">
        Isaac Madwed
      </RouterLink>
    );
  }
}

const style = {
  flex: 1,
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  color: TEXT_PRIMARY,
  fontSize: '4em',
  fontWeight: 100,
  textDecoration: 'none',
};

export default connect()(Main);
