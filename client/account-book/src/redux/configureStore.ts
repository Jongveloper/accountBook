import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];
middlewares.push(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
