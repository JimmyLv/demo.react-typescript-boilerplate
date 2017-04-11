import { conformsTo, isEmpty, isFunction, isObject, isString } from 'lodash';
import invariant = require('invariant');
import warning = require('warning');
import createReducer from '../reducers';

/**
 * Validate the shape of redux store
 */
export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    asyncReducers: isObject,
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) asyncInjectors: Expected a valid redux store',
  );
}

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store, isValid = false) {
  return function injectReducer(name, asyncReducer) { // tslint:disable-line:only-arrow-functions
    if (!isValid) { checkStore(store); }

    invariant(
      isString(name) && !isEmpty(name) && isFunction(asyncReducer),
      '(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function',
    );

    if (Reflect.has(store.asyncReducers, name)) { return; }

    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store, isValid = false) {
  return function injectSagas(sagas) { // tslint:disable-line:only-arrow-functions
    if (!isValid) { checkStore(store); }

    invariant(
      Array.isArray(sagas),
      '(app/utils...) injectAsyncSagas: Expected `sagas` to be an array of generator functions',
    );

    warning(
      !isEmpty(sagas),
      '(app/utils...) injectAsyncSagas: Received an empty `sagas` array',
    );

    sagas.map(store.runSaga);
  };
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectAsyncReducer(store, true),
    injectSagas: injectAsyncSagas(store, true),
  };
}
