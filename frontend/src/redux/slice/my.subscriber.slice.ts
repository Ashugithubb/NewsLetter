'use client'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { any } from 'zod';



export interface Sessions {
 sessionId: number,
  device: string,
  IpAddress: string,
  loginTime: string
  isActive: boolean,     
}


interface SessionState {
  sessionlist: Sessions[] ;
  loading: boolean;
  error: string | null;
}

const initialState: SessionState = {
  sessionlist: [],
  loading: false,
  error: null,
};

export const getMySubscriberThunk = createAsyncThunk(
  'mysubscriber/getmySubscriber',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3001/subscriber`, {
        withCredentials: true,
      });
      console.log("res ssession",response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch subscriber');
    }
  }
);
const mySubscriberSlice = createSlice({
  name: 'mysubscriberlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMySubscriberThunk .pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMySubscriberThunk .fulfilled, (state, action) => {
        state.loading = false;
        state.sessionlist = action.payload;
      })
      .addCase(getMySubscriberThunk .rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
;

export default mySubscriberSlice.reducer;