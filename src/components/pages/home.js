import React, { Component } from 'react';
import { connect } from 'react-redux';

import showMenu from '../../actions/show-menu';

import wrapper from '../wrapper';

import { TEXT_PRIMARY } from '../../colors';

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(showMenu());
  }

  render() {
    return (
      <Layout>
      </Layout>
    );
  }
}

const Layout = wrapper({
  flex: 1,
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: TEXT_PRIMARY,
  fontSize: '2em',
  fontWeight: 300,
});

export default connect()(Home);
