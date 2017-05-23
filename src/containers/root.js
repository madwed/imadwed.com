import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
import DevTools from './dev-tools';
import createDevToolsWindow from '../utils/create-dev-tools-window';

export default class Root extends React.Component {
  static propTypes = {
    history : React.PropTypes.object.isRequired,
    store   : React.PropTypes.object.isRequired,
    debug   : React.PropTypes.bool,
    debugExternal : React.PropTypes.bool
  };

  static defaultProps = {
    debug : false,
    debugExternal : false
  };

  renderDevTools () {
    const { debug, store } = this.props;
    if (!debug) {
      return null
    }

    return this.props.debugExternal ? createDevToolsWindow(store) : <DevTools/>;
  }

  render () {
    return (
      <Provider store={ this.props.store }>
        <div>
          <Router history={ this.props.history }>
            { routes(this.props.store) }
          </Router>
          { this.renderDevTools() }
        </div>
      </Provider>
    );
  }
}
