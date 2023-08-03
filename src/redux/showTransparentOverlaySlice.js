import {
  createSlice 
} from '@reduxjs/toolkit'
export const showTransparentOverlaySlice = createSlice({
  name: 'changeTransparentOverlay',
  initialState: {
    isOpen: false,
  },
  reducers: {
    changeTransparentOverlay: (state, action) => {
      state.showTransparentOverlay = action.payload
    },
  },
})
 
export const { changeTransparentOverlay } = showTransparentOverlaySlice.actions
export default showTransparentOverlaySlice.reducer