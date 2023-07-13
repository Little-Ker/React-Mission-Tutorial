import {
  createAsyncThunk, createSlice 
} from '@reduxjs/toolkit'
import axios from 'axios'
 
export const fetchTitleData  = createAsyncThunk(
  'axios/fetchTitleData',
  async () => {
    const response = await axios.get('/data/dataList.json')
    return response.data.titleData
  }
)
 
export const todoAxiosSlice = createSlice({
  name: 'axios',
  initialState: {
    titleData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTitleData.fulfilled, (state, action) => {
        state.titleData = action.payload
      })
  },
})
 
export default todoAxiosSlice.reducer