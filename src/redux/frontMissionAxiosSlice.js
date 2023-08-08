import {
  createAsyncThunk, createSlice 
} from '@reduxjs/toolkit'
import axios from 'axios'
 
export const fetchFrontMissionData  = createAsyncThunk(
  'axios/fetchFrontMissionData',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_URL}/data/dataList.json`)
    return response.data.mission
  }
)
 
export const frontMissionAxiosSlice = createSlice({
  name: 'axios',
  initialState: {
    missionData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchFrontMissionData.fulfilled, (state, action) => {
        state.missionData = action.payload
      })
  },
})
 
export default frontMissionAxiosSlice.reducer