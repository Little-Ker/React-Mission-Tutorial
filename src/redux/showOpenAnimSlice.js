import {
  createSlice 
} from '@reduxjs/toolkit'
export const showOpenAnimSlice = createSlice({
  name: 'showOpenAnim',
  initialState: {
    isOpen: false,
  },
  reducers: {
    showOpenAnim: (state, action) => {
      state.isOpen = action.payload
    },
  },
})
 
export const { showOpenAnim } = showOpenAnimSlice.actions
export default showOpenAnimSlice.reducer