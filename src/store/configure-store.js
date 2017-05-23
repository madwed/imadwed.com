import { applyMiddleware, compose, createStore } from 'redux'
import reducers from '../reducers'
import middlewares from '../middlewares'
import DevTools from '../containers/dev-tools'

export default function configureStore (initialState, debug) {
  let createStoreWithMiddleware

  const middleware = applyMiddleware(...middlewares)

  if (debug) {
    createStoreWithMiddleware = compose(
      middleware,
      DevTools.instrument(),
    )
  } else {
    createStoreWithMiddleware = compose(middleware)
  }

  const store = createStoreWithMiddleware(createStore)(reducers, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}
