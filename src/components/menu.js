import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import wrapper from './wrapper';
import Link from './link';

import { BACKGROUND } from '../colors';

class Menu extends Component {
  render() {
    const { state } = this.props;

    let menu = (<div/>);
    if (state === 'open') {
      menu = (
        <Header backgroundColor={ '#fff' }>
          <Item>
            <Link>Isaac Madwed</Link>
          </Item>
          <Item>
            <Link>Menu</Link>
          </Item>
        </Header>
      );

    } else if (state === 'hidden') {
      menu = (
        <Header>
          <Item>
            <Link color="#ff0">Isaac Madwed</Link>
          </Item>
        </Header>
      );

    } else if (state === 'closed') {
      menu = (
        <Header/>
      );

    }

    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={ 100 }
        transitionLeaveTimeout={ 100 }
      >
        { menu }
      </ReactCSSTransitionGroup>
    );
  }
}

const Item = wrapper({
  display: 'flex',
  padding: '0em 2em',
  cursor: 'pointer',
  height: '4em',
  alignItems: 'center',
});

const Header = wrapper({
  height: '4em',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.5em',
  fontWeight: 300,
});

export default Menu;
