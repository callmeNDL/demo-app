import { User } from './../../interfaces/data.interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSagaAction } from '../createSagaAction';

interface InitState {
  loading: boolean;
  data: {
    itemTotal: number;
    items: any[];
  };
  error: string | null;
}

const initialState: InitState = {
  loading: false,
  data: {
    items: [],
    itemTotal: 0,
  },
  error: null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    fetchData:(state) =>{
      state.loading =true;
    },
    fetchDataSuccess: (state, action: PayloadAction<User[]>) => {
      console.log("check data",action.payload);
      
      state.data.items = action.payload; 
      state.data.itemTotal = action.payload.length; 
      state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload; 
    },
    deleteData:(state,action: PayloadAction<string>) =>{
      state.data.items = state.data.items.filter(item => {
        return item.id !== action.payload;
      });
    },
    createUser:(state,action: PayloadAction<User>) =>{
      // state.data.items = [action.payload,...state.data.items]
    }
  }      
});

export const { fetchData,fetchDataSuccess ,setError, deleteData,createUser } = userSlice.actions;

export default userSlice.reducer;
