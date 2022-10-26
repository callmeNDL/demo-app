import { User } from './../../interfaces/data.interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitState {
  loading: boolean;
  data: {
    itemTotal: number;
    items: User[];
    item:Partial<User>
  };
  searchText:string,
  error: string | null;
}

const initialState: InitState = {
  loading: false,
  data: {
    items: [],
    itemTotal: 0,
    item:{}
  },
  searchText:'',
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
      state.data.items = action.payload; 
      state.data.itemTotal = action.payload.length; 
      state.loading = false;
    },
    deleteData:(state,action: PayloadAction<string>) =>{
      state.loading = true;
      state.data.items = state.data.items.filter(item => {
        return item.id !== action.payload;
      });
    },
    createUser:(state,action: PayloadAction<User>) =>{
      state.loading = true
      state.data.items = [action.payload,...state.data.items]
    },
    updateUser:(state,action: PayloadAction<User>) =>{
      state.loading= true
      state.data.item = state.data.items.find(item => {
        return item.id === action.payload.id })|| {};
    },
    stopLoading:(state) =>{
      state.loading= false
    },
    searchDataStart:(state,action:PayloadAction<string>) =>{
      state.searchText = action.payload,
      state.loading =true;
    },
    searchDataSuccess: (state, action: PayloadAction<User[]>) => {
        state.data.items = action.payload; 
        state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload; 
    },
  }      
});

export const { fetchData,fetchDataSuccess ,setError, deleteData,createUser,stopLoading,updateUser,searchDataStart,searchDataSuccess } = userSlice.actions;

export default userSlice.reducer;
