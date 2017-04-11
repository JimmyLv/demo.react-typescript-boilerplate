/**
 * Create the store with asynchronously loaded reducers
 */

import Redux, { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import Middleware = Redux.Middleware;

const sagaMiddleware = createSagaMiddleware();

import {Task, SagaIterator} from 'redux-saga';

export interface IStore<T> extends Redux.Store<T> {
  runSaga?: (saga: (...args: any[]) => SagaIterator, ...args: any[]) => Task; // TODO: cleanup
  asyncReducers?: Redux.ReducersMapObject;
}
declare interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
}
declare const window: IWindow;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore<T>(initialState: object = {}, history): IStore<T> {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares: Middleware[] = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const store: IStore<T> = createStore<T>(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
