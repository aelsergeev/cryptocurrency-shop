import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/redusers';
import rootSaga from './modules/sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
