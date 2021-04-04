/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { takeEvery, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { navigator } from '../../navigation/navigator';
import loaderSlice from '../slices/loader.slice';
import authSlice from '../slices/auth.slice';
import { storageEngine } from '../../common/helper';
import Api from '../../services/Apis/index';
import { LOGIN, LOGOUT, USER_SIGN_UP } from '../actions/auth.actions';

function* login(action: PayloadAction<{ username: string; password: string }>) {
  const { password, username } = action.payload;
  const value:any = {password,email:username}
  try {
    yield put(loaderSlice.actions.show());
    const response = yield Api.withoutAuth.login(value);
    yield put(authSlice.actions.setUserData(response.data.data));
    storageEngine.set('user', response.data.data);
    navigator.history.replace('/dashboard');
    yield put(loaderSlice.actions.hide());
    toast.success('Successfully login');
  } catch (err) {
    yield put(authSlice.actions.setAuthentication(false));
    yield put(loaderSlice.actions.hide());
    toast.error('Invalid username or password');
  }
}

function* logout() {
  try {
    yield put(loaderSlice.actions.show());
    yield Api.user.logout();
    storageEngine.unset('user');
    navigator.history.replace('/');
    yield put(loaderSlice.actions.hide());
    toast.warn('Successfully logged out');
  } catch (err) {
    yield put(loaderSlice.actions.hide());
    console.log(err);
    // toast.error(err.data.message);
  }
}
function* userSignUp(action:any){
  try{
    const {firstName,
      lastName,
      email,
      password,
      role,}=action.payload;
    const values: any = {
      firstName,
      lastName,
      email,
      password,
      role,
    };
    yield put(loaderSlice.actions.show());
    const response = yield Api.withoutAuth.userSignUp(values);
    // console.log(response)
    yield put(authSlice.actions.setUserData(response.data.data));
    storageEngine.set('user', response.data.data);
    navigator.history.replace('/dashboard');
    yield put(loaderSlice.actions.hide());
  }catch(e){
    console.log(e);
  }
}

function* authSaga() {
  yield takeEvery(USER_SIGN_UP,userSignUp)
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
}

export default authSaga;
