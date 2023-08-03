import {
  createAsyncThunk, createSlice 
} from '@reduxjs/toolkit'
import axios from 'axios'
 
export const fetchTargetData  = createAsyncThunk(
  'axios/fetchTargetData',
  async () => {
    const response = await axios.get('/data/dataList.json')
    return response.data.target
  }
)
 
export const personalWebsiteAxiosSlice = createSlice({
  name: 'axios',
  initialState: {
    missionData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTargetData.fulfilled, (state, action) => {
        state.missionData = action.payload
      })
  },
})
 
export default personalWebsiteAxiosSlice.reducer