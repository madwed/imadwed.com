import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import wrapper from './wrapper';
import Menu from './menu';

import { BACKGROUND } from '../colors';

import '../index.css';
import '../fade.css';

const selectState = ({ menu }) => {
  return {
    menu,
  };
};

class Layout extends Component {
  render() {
    const { children, location, menu } = this.props;
    const { pathname } = location;

    const key = pathname.split('/')[1] || 'root';

    return (
      <Page>
        <Menu state={ menu.state }/>
        <Container>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={ 100 }
            transitionLeaveTimeout={ 100 }
          >
            {
              React.Children.map(children, (child, i) => {
                return React.cloneElement(child, { key: key + i });
              })
            }
          </ReactCSSTransitionGroup>
        </Container>
      </Page>
    );
  }
}

const Page = wrapper({
  backgroundColor: BACKGROUND,
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '62.5%',
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  margin: 'auto',
  flexDirection: 'column',
});

const Container = wrapper({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
});

export default connect(selectState)(Layout);
