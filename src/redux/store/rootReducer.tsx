/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import loaderSlice from '../slices/loader.slice';
import authSlice from '../slices/auth.slice';

const rootReducer = combineReducers({
  loader: loaderSlice.reducer,
  auth: authSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
