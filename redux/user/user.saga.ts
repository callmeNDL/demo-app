import { createUserApi, updateUserApi } from './../../api/user';
import axios from 'axios';

import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteData, fetchData, fetchDataSuccess, setError ,createUser, stopLoading, updateUser} from './user.slice';
import { deleteUserApi } from '../../api/user';
import { User } from '../../interfaces/data.interfaces';
import Router from 'next/router';

const callApi = (url: string)=>{
    return axios.get(url)
}

export function* userApi(): any{
  const {data} = yield call(callApi, 'https://634f61eb4af5fdff3a73481d.mockapi.io/users')
  if(data){
    yield put(fetchDataSuccess(data))
  }else {
    yield put(setError("Can't get data"))
  }
}

export function* deleteUserSaga(action: PayloadAction<string>) {
  if(action.payload) {
    try {
      const res:number = yield call(deleteUserApi,action.payload)
      if(res === 200){
        yield put(stopLoading())
      }
    } catch (error) {
      yield put(setError("Can't delete user"))
    }
  }
  
}

export function* createUserSaga(action: PayloadAction<User>) {
    try {
      const res:number = yield call(createUserApi,action.payload);
     if(res === 201){
      yield put(stopLoading()) 
      Router.push('/user')
     }
     else {
      yield put(setError("Can't create user"))
     }

    } catch (error) {
      yield put(setError("Can't create user"))
    }
}

export function* updateUserSaga(action: PayloadAction<User>) {

  try {
    const res:number = yield call(updateUserApi,action.payload);
   if(res === 200){
    yield put(stopLoading())
    Router.push('/user')
   }
   else {
    yield put(setError("Can't update user"))
   }

  } catch (error) {
    yield put(setError("Can't update user"))
  }
}
export function* userSaga() {
    yield takeLatest(fetchData.type, userApi);
    yield takeLatest(deleteData.type, deleteUserSaga);
    yield takeLatest(createUser.type, createUserSaga);
    yield takeLatest(updateUser.type, updateUserSaga);

}

 
