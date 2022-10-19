import { createUserApi } from './../../api/user';
import axios from 'axios';

import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteData, fetchData, fetchDataSuccess, setError ,createUser} from './user.slice';
import { deleteUserApi } from '../../api/user';
import { User } from '../../interfaces/data.interfaces';
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

export function* deleteUser(action: PayloadAction<string>) {
  if(action.payload) {
    try {
      const res:string = yield call(deleteUserApi,action.payload)
      
    } catch (error) {
      yield put(setError("Can't delete user"))
    }
  }
  
}

export function* createUserSlice(action: PayloadAction<User>) {
  if(action.payload) {
    try {
      console.log("call.....");
      
      const res:string = yield call(createUserApi,action.payload);
      if(res) {
        yield put(createUser(action.payload))
      }
      
    } catch (error) {
      yield put(setError("Can't delete user"))
    }
  }
  yield put(setError("Can't find user"))
  
}

export function* userSaga() {
    yield takeLatest(fetchData.type, userApi);
    yield takeLatest(deleteData.type, deleteUser);
    yield takeLatest(createUser.type, createUserSlice);
}

 
